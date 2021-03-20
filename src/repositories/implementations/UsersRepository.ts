import { getRepository, Repository } from "typeorm";

import Users from "../../models/Users";
import IUsersRepository, { ICreateUserDTO } from "../IUsersRepository";

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(Users);
  }
  findByEmail(email: string): Promise<Users | undefined> {
    return this.ormRepository.findOne({ where: { email } });
  }

  create(data: ICreateUserDTO): Promise<Users> {
    const newUser = this.ormRepository.create(data);

    return this.ormRepository.save(newUser);
  }
}
