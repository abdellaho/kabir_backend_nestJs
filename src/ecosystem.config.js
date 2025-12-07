module.exports = {
    apps: [{
      name: 'my-nestjs-app',
      script: './dist/src/main.js',
      cwd: 'C:\\Users\\Abdellah\\IdeaProjects\\kabir_backend_nestJs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DATABASE_URL: 'mysql://root:root@localhost:3307/kab'
      }
    }]
  };