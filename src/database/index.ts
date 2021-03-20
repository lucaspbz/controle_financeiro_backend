import { createConnection, getConnectionOptions } from "typeorm";

export default async function setupDatabase(): Promise<void> {
  const defaultOptions = await getConnectionOptions();

  if (process.env.NODE_ENV === "development") {
    Object.assign(defaultOptions, { url: process.env.DATABASE_URL });
  }

  createConnection(defaultOptions)
    .then(() => {
      console.log(`Database connected!`);
    })
    .catch((error) => {
      console.log(`Failed to connect to database: ${error.message}`);
    });
}
