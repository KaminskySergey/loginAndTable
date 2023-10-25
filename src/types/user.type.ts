export interface IUserState {
  user: {
    username: string | null;
    password: string | null;
  };
  isAuth: boolean;
}

export interface IActors {
  id: string;
  name: string;
  email: string;
  address: string;
  phone_number: string;
  birthday_date: string;
}

export interface IValuesEditForm {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  address: string;
}
