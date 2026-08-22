/**
 * PM2 process file for production (`serve dist`).
 * Run `npm run build` once before `pm2 start ecosystem.config.js`.
 * Default `PORT` is 3007 so it can run beside other sites on the same host.
 */
module.exports = {
  apps: [
    {
      name: 'rock-paper-scissors',
      script: 'npx',
      args: 'serve -s dist -l 3007',
      cwd: process.cwd(),
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3007,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3007,
      },
    },
  ],
};
