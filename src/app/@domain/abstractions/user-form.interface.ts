import { FormControl } from "@angular/forms";

export interface IUserForm {
  userName: FormControl;
  email: FormControl;
  type: FormControl;
  password: FormControl;
}
