import cors from "cors";
import express from "express";

import { setupDatabase } from "./database";
import errorHandlerMiddleware from "./middlewares/ErrorHandlerMiddleware";
import routes from "./routes";
import "./setup";

setupDatabase();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.get("/", async (request, response) => {
  return response.json({ message: "Welcome to my API!" });
});

app.use(errorHandlerMiddleware);

export { app };
