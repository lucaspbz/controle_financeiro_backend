import Users from "../models/Users";

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export default interface IUsersRepository {
  findByEmail(email: string): Promise<Users | undefined>;

  create(data: ICreateUserDTO): Promise<Users>;
}
