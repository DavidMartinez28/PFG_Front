import { Injectable } from '@angular/core';
import { SignInResponse, User, UserResponse } from '../models/user';
import { Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService { 
  public userLoged$:ReplaySubject<boolean> = new ReplaySubject<boolean>(1)
	//Definimos el endpoint y los headers para poder realizar la petición
  endpoint: string = 'http://localhost:300/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser?: UserResponse; //Aquí almacenaremos el usuario 

  constructor(
    private http: HttpClient,
    public router: Router
  ) {}

  public initUser() {
    this.userLoged$.next(this.isLoggedIn)
    const userId = this.getUserId();
    if (userId) {
      this.getUserProfile(userId).subscribe();
    }
  }

  // Sign-up
  signup(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  signIn(user: User) {
    return this.http.post<SignInResponse>(`${this.endpoint}/signin`, user)
      .subscribe((res: SignInResponse) => {
        const user = JSON.stringify({
          id: res._id,
          token: res.token
        });
        localStorage.setItem('access_token', user);
        this.userLoged$.next(true);
				//Seteamos el token
        this.getUserProfile(res._id).subscribe((res) => {
          this.router.navigate(['user-profile']);
				//Volvemos al user-profile una vez ejecutada la función
        })
      })
  }

  getToken(): string | undefined {
    const user = localStorage.getItem('access_token');
    if (!user) { return undefined; }
    const token = JSON.parse(user)?.token;
    return token;
  }

  getUserId(): string | undefined {
    const user = localStorage.getItem('access_token');
    if (!user) { return undefined; }
    const id = JSON.parse(user)?.id;
    return id;
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
      this.userLoged$.next(false);
    }
  }

  // User profile
  getUserProfile(id: string): Observable<UserResponse> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get<UserResponse>(api, { headers: this.headers }).pipe(
      catchError(this.handleError),
      tap((user) => {
        this.currentUser = user;
      })
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}