module.exports = ({ env }) => ({
    // Other configurations...
    'users-permissions': {
      jwtSecret: env('JWT_SECRET'),
    },
  });
  