import { createConnection, getConnectionOptions } from "typeorm";

export default async function setupDatabase(): Promise<void> {
  const defaultOptions = await getConnectionOptions();

  if (process.env.NODE_ENV !== "development") {
    console.log(process.env.DATABASE_URL);
    Object.assign(defaultOptions, {
      ssl: {
        rejectUnauthorized: false,
      },
    });
  } else {
    Object.assign(defaultOptions, {
      host: `${process.env.DB_HOST}`,
      port: `${process.env.DB_PORT}`,
      username: `${process.env.DB_USER}`,
      password: `${process.env.DB_PASSWORD}`,
    });
  }

  createConnection(defaultOptions)
    .then(() => {
      console.log(`Database connected!`);
    })
    .catch((error) => {
      console.log({ error });
      console.log(`Failed to connect to database: ${error}`);
    });
}
