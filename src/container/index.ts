import { container } from "tsyringe";

import UsersRepository from "../repositories/implementations/UsersRepository";
import IUsersRepository from "../repositories/IUsersRepository";

container.register<IUsersRepository>("UsersRepository", UsersRepository);
