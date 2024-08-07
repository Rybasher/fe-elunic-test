import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthGuard } from './@core/guards/auth.guard';
import { AuthCheckGuard } from './@core/guards/authCheck.guard';

const routes: Routes = [
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard] },
  {
    path: '',
    canActivate: [AuthCheckGuard],
    component: LoginFormComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
