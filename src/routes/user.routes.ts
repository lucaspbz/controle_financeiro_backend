import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { container } from "tsyringe";

import CreateUserService from "../services/user/CreateUserService";

const userRoutes = Router();

userRoutes.post(
  "/signup",
  celebrate(
    {
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  async (request, response) => {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const newUser = await createUser.execute({ name, password, email });

    return response.status(201).json(newUser);
  }
);

export default userRoutes;
