require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: `${process.env.DB_HOST}`,
  port: `${process.env.DB_PORT}`,
  username: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
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
