import { NextFunction, Request, Response } from "express";

import AppError from "./AppError";

export default function errorHandlerMiddleware(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
      details: [],
    });
  }

  console.log(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
    details: [err.message],
  });
}
