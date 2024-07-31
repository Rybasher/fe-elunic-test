import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../@core/services/auth.service';
import { UserService } from '../@core/services/user.service';
import { IUserData } from '../@domain/abstractions/user-data.interface';
import { IUserForm } from '../@domain/abstractions/user-form.interface';
import { CreateUserDto } from '../@domain/dto/create-user.dto';
import { USER_TYPE } from '../@domain/enums/user-type.enum';
import { UserModel } from '../@domain/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  userForm: FormGroup;
  users$!: Observable<UserModel[]>;

  get userTypes() {
    return Object.values(USER_TYPE);
  }

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {
    this.userForm = this._initUserForm();
  }

  isValid(formControlName: keyof IUserForm, error: string) {
    return (
      this.userForm.controls[formControlName].hasError(error) &&
      this.userForm.controls[formControlName].touched
    );
  }

  submitForm() {
    const userData: IUserData = this.userForm.value;
    this._authService
      .register(
        new CreateUserDto(
          userData.userName,
          userData.email,
          userData.password,
          userData.type
        )
      )
      .subscribe(() => this._router.navigate(['users']));
  }

  private _initUserForm() {
    return new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(24),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      type: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,24}$/),
      ]),
    });
  }
}
