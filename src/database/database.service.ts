import 'dotenv/config';
import { Injectable, OnModuleInit, Logger, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(DatabaseService.name);

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error(
        'DATABASE_URL environment variable is required. Please ensure it is set in your .env file or environment variables.'
      );
    }

    const adapter = new PrismaMariaDb(process.env.DATABASE_URL);

    super({
      adapter,
      log: [
        { emit: 'event', level: 'query' },
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

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
