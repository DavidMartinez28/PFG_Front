import { Injectable } from '@angular/core';
import {PacientePsicologo,SignInResponse, User, UserProfile, UserResponse } from '../models/user';
import { Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PsicologoServiceService {

  //Definimos el endpoint y los headers para poder realizar la petición
  endpoint: string = 'http://localhost:300/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router
  ) {}


  getPacientes(psicologoId: string): Observable<PacientePsicologo[]> {
    return this.http.get<PacientePsicologo[]>(`${this.endpoint}/psicologos/${psicologoId}/pacientes`, {headers: this.headers})
      .pipe(
        catchError(this.handleError)
      );
  }


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
