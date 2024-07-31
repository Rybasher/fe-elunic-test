import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthCheckGuard implements CanActivate {
  constructor(private readonly _router: Router) {}

  canActivate(): boolean {
    if (this.tokenExists()) {
      this._router.navigate(['/users']);
      return false;
    }
    return true;
  }

  private tokenExists(): boolean {
    return !!localStorage.getItem('token');
  }
}
