

module.exports = ({ env }) => ({
    proxy: true,
    host: "0.0.0.0",
    port: process.env.PORT,
    url: env('http://localhost:1337/'),
    app: { 
      keys: env.array('APP_KEYS')
    },
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET'),
      },
    },
  })
  