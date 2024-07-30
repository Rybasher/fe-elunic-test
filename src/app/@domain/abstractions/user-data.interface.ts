import { USER_TYPE } from '../enums/user-type.enum';

export interface IUserData {
  userName: string;
  email: string;
  password: string;
  type: USER_TYPE;
}
