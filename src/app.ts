import "dotenv/config";
import "express-async-errors";

import cors from "cors";
import express from "express";

import setupDatabase from "./database";
import errorHandlerMiddleware from "./Error/ErrorHandlerMiddleware";
import routes from "./routes";

setupDatabase();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorHandlerMiddleware);

export default app;
