import bcrypt from "bcrypt";
import { inject, injectable } from "tsyringe";

import AppError from "../../Error/AppError";
import IUsersRepository from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ name, email, password }: IRequest) {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("This email is already taken");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      email,
      password: encryptedPassword,
      name,
    });

    delete user.password;

    return user;
  }
}
