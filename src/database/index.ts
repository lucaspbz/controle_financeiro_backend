import { createConnection, getConnectionOptions } from "typeorm";

export default async function setupDatabase(): Promise<void> {
  const defaultOptions = await getConnectionOptions();

  if (process.env.NODE_ENV !== "development") {
    console.log(process.env.DATABASE_URL);
    Object.assign(defaultOptions, {
      url: `${process.env.DATABASE_URL}?ssl:true`,
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
