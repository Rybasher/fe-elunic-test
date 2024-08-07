import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserModel } from '../../@domain/models/user.model';
import { LoginUserDto } from '../../@domain/dto/login-user.dto';
import { CreateUserDto } from '../../@domain/dto/create-user.dto';
import { tap } from 'rxjs';
import { TokenModel } from '../../@domain/models/token.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _urlPrefix = 'auth';

  constructor(
    private readonly _apiService: ApiService,
    private readonly _router: Router
  ) {}

  login(loginUserDto: LoginUserDto) {
    return this._apiService
      .post<{ token: TokenModel; user: UserModel }>(
        `${this._urlPrefix}/login`,
        loginUserDto
      )
      .pipe(tap((x) => localStorage.setItem('token', x.token.accessToken)));
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  register(createUserDto: CreateUserDto) {
    return this._apiService
      .post<{ token: TokenModel; user: UserModel }>(
        `${this._urlPrefix}/registration`,
        createUserDto
      )
      .pipe(tap((x) => localStorage.setItem('token', x.token.accessToken)));
  }
}
