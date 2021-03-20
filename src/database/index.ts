import { createConnection, getConnectionOptions } from "typeorm";

export default async function setupDatabase(): Promise<void> {
  const defaultOptions = await getConnectionOptions();
  createConnection(defaultOptions)
    .then(() => {
      console.log(`Database connected!`);
    })
    .catch((error) => {
      console.log(`Failed to connect to database: ${error.message}`);
    });
}
