import { IUserState } from "@/src/types/user.type";

export const InitUser: IUserState = {
  user: { username: null, password: null },
  isAuth: false,
};
