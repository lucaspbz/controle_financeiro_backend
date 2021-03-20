import Users from "../../../src/models/Users";

const FakeUser = {
  default: () =>
    ({
      id: "userId",
      name: "John Doe",
      email: "johndoe@email.com",
      password: "123456",
      created_at: new Date(),
      updated_at: new Date(),
    } as Users),
};

export default FakeUser;
