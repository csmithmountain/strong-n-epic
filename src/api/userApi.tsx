import type { User } from "../types/interface";

class UserApi {
  getUser(): Promise<User[]> {
    const user: User[] = [
      {
        username: "admin",
        password: "admin",
        role: "admin",
      },
      {
        username: "Olof",
        password: "12345",
        role: "user",
      },
      {
        username: "Kalle",
        password: "12345",
        role: "user",
      },
      {
        username: "Bertil",
        password: "12345",
        role: "user",
      },
      {
        username: "Gustav",
        password: "12345",
        role: "user",
      },
    ];
    return Promise.resolve(user);
  }
}

export const userApi = new UserApi();
