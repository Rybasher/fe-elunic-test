import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private readonly _http: HttpClient,
    private readonly toast: ToastrService
  ) {}

  get<T>(url: string): Observable<T> {
    return this._http.get<T>(url).pipe(
      take(1),
      catchError((error) => {
        this.toast.error(error.error.message);
        return of(error as T);
      })
    );
  }

  post<T>(url: string, body: unknown): Observable<T> {
    return this._http.post<T>(url, body).pipe(
      take(1),
      catchError((error) => {
        console.log(error);
        this.toast.error(error.error.message);
        return of(error as T);
      })
    );
  }

  put<T>(url: string, body: unknown): Observable<T> {
    return this._http.put<T>(url, body).pipe(
      take(1),
      catchError((error) => {
        this.toast.error(error.error.message);
        return of(error as T);
      })
    );
  }

  delete<T>(url: string): Observable<T> {
    return this._http.delete<T>(url).pipe(
      take(1),
      catchError((error) => {
        this.toast.error(error.error.message);
        return of(error as T);
      })
    );
  }
}
