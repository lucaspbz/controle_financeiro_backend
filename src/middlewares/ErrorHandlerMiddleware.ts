import { isCelebrateError } from "celebrate";
import { NextFunction, Request, Response } from "express";

import AppError from "../Error/AppError";

export default function errorHandlerMiddleware(
  err: Error,
  __: Request,
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

  if (isCelebrateError(err)) {
    const details: string[] = [];
    err.details.forEach((detail) => {
      details.push(detail.message);
    });

    return response.status(400).json({
      status: "validation error",
      message: err.message,
      details,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
    details: [err.message],
  });
}
