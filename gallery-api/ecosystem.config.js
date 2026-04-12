// PM2 config — run with: pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'gallery-api',
      script: 'server.js',
      env: {
        PORT: 3001,
        GALLERY_PIN: '0961',
        API_BASE_URL: 'https://gallery.vcallia.com',
      },
    },
  ],
};
