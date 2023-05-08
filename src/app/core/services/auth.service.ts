import { Injectable } from '@angular/core';
import { SignInResponse, User, UserData, UserProfile, UserResponse } from '../models/user';
import { Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService { 
  public userLoged$:ReplaySubject<boolean> = new ReplaySubject<boolean>(1)
	//Definimos el endpoint y los headers para poder realizar la petición
  endpoint: string = 'https://psychogood.onrender.com/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser?: UserResponse; //Aquí almacenaremos el usuario 

  constructor(
    private http: HttpClient,
    public router: Router
  ) {}

  public initUser() {
    const userId = this.getUserId();
    if (userId) {
      this.getUserProfile(userId).subscribe(() => this.userLoged$.next(true));
    } else {
      this.userLoged$.next(false)
    }
  }

  // Sign-up
  signup(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError.bind(this))
      )
  }

  // Sign-in
  signIn(user: User): Observable<UserResponse> {
    return this.http.post<SignInResponse>(`${this.endpoint}/signin`, user).pipe(
      tap((res) => {
        const user = JSON.stringify({
          id: res._id,
          token: res.token
        });
        localStorage.setItem('access_token', user);
      }),
      switchMap((res) => this.getUserProfile(res._id)),
      tap(() => {
        this.userLoged$.next(true);
        this.router.navigate(['user-profile']);
      })
    );
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
      catchError(this.handleError.bind(this)),
      tap((user) => {
        console.log(user);
        this.currentUser = user;
      })
    )
  }

  cambiarPerfil(userId:string, user: UserProfile): Observable<UserData>{
    return this.http.put<UserData>(`${this.endpoint}/update-user/${userId}`, user)
    .pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error === 'jwt expired'){
      this.doLogout();
    }
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