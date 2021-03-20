import Users from "../../../src/models/Users";
import IUsersRepository, {
  ICreateUserDTO,
} from "../../../src/repositories/IUsersRepository";
import FakeUser from "../models/FakeUser";

const UsersRepositorySpy = () => {
  class UsersRepositorySpy implements IUsersRepository {
    findByEmail(email: string): Promise<Users | undefined> {
      return new Promise((resolve) => resolve(FakeUser.default()));
    }
    create(data: ICreateUserDTO): Promise<Users> {
      return new Promise((resolve) =>
        resolve({
          ...data,
          id: "new user",
          created_at: new Date(),
          updated_at: new Date(),
        })
      );
    }
  }

  return new UsersRepositorySpy();
};

export default UsersRepositorySpy;
