require('dotenv').config();

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  schema: process.env.NODE_ENV === 'test' ? 'test' : 'public',
  entities:
    process.env.NODE_ENV === 'development'
      ? ['./src/models/*.ts']
      : ['./dist/models/*.js'],
  migrations:
    process.env.NODE_ENV === 'development'
      ? ['./src/database/migrations/*.ts']
      : ['./dist/database/migrations/*.js'],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/models',
  },
};
