import { USER_TYPE } from '../enums/user-type.enum';

export class CreateUserDto {
  userName: string;
  email: string;
  password: string;
  type: USER_TYPE;

  constructor(userName: string, email: string, password: string, type: USER_TYPE) {
    this.userName = userName,
    this.email = email;
    this.password = password;
    this.type = type;
  }
}
