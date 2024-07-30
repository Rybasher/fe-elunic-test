import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './@core/core.module';
import { FormErrorComponent } from './form-error/form-error.component';
import { DropdownComponent } from './drop-down/drop-down.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './@core/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    FormErrorComponent,
    DropdownComponent,
    RegisterFormComponent,
    LoginFormComponent,
    UsersListComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, CoreModule, AppRoutingModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
