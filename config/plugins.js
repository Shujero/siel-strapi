const crypto = require('crypto');

module.exports = () => ({
  // Other plugin configurations...
  'users-permissions': {
    jwtSecret: crypto.randomBytes(16).toString('base64')
  },
});
