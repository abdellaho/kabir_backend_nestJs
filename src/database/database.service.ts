import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);

  constructor() {
    super({
      log: [
        { emit: 'event', level: 'query', },
        { emit: 'stdout', level: 'warn' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'error' },
      ],
    });

    // Listen to query events and log SQL
    // @ts-ignore - TypeScript may not recognize the event
    this.$on('query', (e: any) => {
      this.logger.log(`Query: ${e.query}`);
      this.logger.log(`Params: ${e.params}`);
      this.logger.log(`Duration: ${e.duration}ms`);
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}