import AppError from "../../src/Error/AppError";
import CreateUserService from "../../src/services/user/CreateUserService";
import UsersRepositorySpy from "../mocks/repositories/UsersRepositorySpy";

const makeSut = () => {
  const usersRepositorySpy = UsersRepositorySpy();
  const sut = new CreateUserService(usersRepositorySpy);

  return { sut, usersRepositorySpy };
};

describe("CreateUserService", () => {
  it("should be able to create a user", async () => {
    const { sut, usersRepositorySpy } = makeSut();
    const name = "User test name";
    const email = "test@email.com";
    const password = "123456";

    jest
      .spyOn(usersRepositorySpy, "findByEmail")
      .mockImplementationOnce(
        () => new Promise((resolve) => resolve(undefined))
      );

    const user = await sut.execute({ email, name, password });

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create a user with already existing email", async () => {
    const { sut } = makeSut();
    const name = "User test name";
    const email = "test@email.com";
    const password = "123456";

    await expect(sut.execute({ email, name, password })).rejects.toBeInstanceOf(
      AppError
    );
  });

  it("should not return password", async () => {
    const { sut, usersRepositorySpy } = makeSut();
    const name = "User test name";
    const email = "test@email.com";
    const password = "123456";

    jest
      .spyOn(usersRepositorySpy, "findByEmail")
      .mockImplementationOnce(
        () => new Promise((resolve) => resolve(undefined))
      );

    const user = await sut.execute({ email, name, password });

    expect(user).not.toHaveProperty("password");
  });

  it("should save encrypted password", async () => {
    const { sut, usersRepositorySpy } = makeSut();
    const name = "User test name";
    const email = "test@email.com";
    const password = "123456";

    jest
      .spyOn(usersRepositorySpy, "findByEmail")
      .mockImplementationOnce(
        () => new Promise((resolve) => resolve(undefined))
      );

    const create = jest.spyOn(usersRepositorySpy, "create");

    sut.execute({ email, name, password });

    expect(create).not.toHaveBeenCalledWith({ name, email, password });
  });
});
