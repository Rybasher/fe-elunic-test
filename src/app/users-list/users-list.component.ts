import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../@domain/models/user.model';
import { UserService } from '../@core/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users$!: Observable<UserModel[]>;

  constructor(private readonly _userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this._userService.getUsers();
  }
}
