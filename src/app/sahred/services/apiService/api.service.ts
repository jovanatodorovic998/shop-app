import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private producstPath = '/products';
  private categoriesPath = '/categories';
  private baseApi = environment.baseApi;

  constructor(private http: HttpClient) {}

  public get<T>(): Observable<T> {
    return this.http
      .get<T>(this.baseApi + this.producstPath)
      .pipe(catchError(this.handleError));
  }

  public delete<T>(id: number): Observable<T> {
    return this.http
      .delete<T>(this.baseApi + '/' + this.producstPath + id)
      .pipe(catchError(this.handleError));
  }

  public add<T>(product: any): Observable<T> {
    return this.http
      .post<T>(this.baseApi + this.producstPath, product)
      .pipe(catchError(this.handleError));
  }

  public getCategories<T>(): Observable<T> {
    return this.http
      .get<T>(this.baseApi + this.producstPath + this.categoriesPath)
      .pipe(catchError(this.handleError));
  }

  private handleError<T>(err: any, caught: Observable<T>): Observable<T> {
    console.log('An error has occured on API call', err);

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
