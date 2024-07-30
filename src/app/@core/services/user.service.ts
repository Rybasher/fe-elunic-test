import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserModel } from '../../@domain/models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly _urlPrefix = 'users/get';

  constructor(private readonly _apiService: ApiService) {}

  getUsers() {
    return this._apiService.get<UserModel[]>(this._urlPrefix);
  }
}
