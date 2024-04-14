module.exports = ({ env }) => ({
    connection: {
      client: 'sqlite',
      filename: env('DATABASE_FILENAME', '.tmp/data.db'), // Default to .tmp/data.db if DATABASE_FILENAME is not specified
    },
  });
  