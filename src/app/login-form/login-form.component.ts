import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../@core/services/auth.service';
import { IUserData } from '../@domain/abstractions/user-data.interface';
import { IUserForm } from '../@domain/abstractions/user-form.interface';
import { LoginUserDto } from '../@domain/dto/login-user.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  userForm: FormGroup;

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
      .login(new LoginUserDto(userData.userName, userData.password))
      .subscribe(() => this._router.navigate(['users']));
  }

  private _initUserForm() {
    return new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(24),
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,60}$/
        ),
      ]),
    });
  }
}
