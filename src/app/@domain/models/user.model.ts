export class UserModel {
  userName: string;
  email: string;
  type: string;

  constructor(userName: string, email: string, type: string) {
    this.userName = userName;
    this.email = email;
    this.type = type;
  }
}
