import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private readonly _http: HttpClient) {}

  get<T>(url: string) {
    return this._http.get<T>(url).pipe(take(1));
  }

  post<T>(url: string, body: unknown) {
    return this._http.post<T>(url, body).pipe(take(1));
  }

  put<T>(url: string, body: unknown) {
    return this._http.put<T>(url, body).pipe(take(1));
  }

  delete<T>(url: string) {
    return this._http.delete<T>(url).pipe(take(1));
  }
}
