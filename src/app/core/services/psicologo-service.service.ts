import { Injectable } from '@angular/core';
import {Documentos, PacientePsicologo,SignInResponse, User, UserProfile, UserResponse } from '../models/user';
import { Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Invitaciones, Pacientes } from 'src/app/pages/invitaciones/models/invitaciones.models';

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

  getAllPacientes(): Observable<Pacientes[]> {
    return this.http.get<Pacientes[]>(`${this.endpoint}/pacientes`, {headers: this.headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  getPacientesInvitables(psicologoId: string): Observable<Pacientes[]> {
    return this.http.get<Pacientes[]>(`${this.endpoint}/psicologo/${psicologoId}/pacientes-invitables`, {headers: this.headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  createInvitacion(invitacion: Invitaciones): Observable<any> {
    return this.http.post(`${this.endpoint}/invitaciones`, invitacion);
  }


  getPacienteById(pacienteId: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.endpoint}/paciente/${pacienteId}`, {headers: this.headers})
    .pipe(
      catchError(this.handleError)
    );
  }

  sendPost(body: FormData): Observable<any>{
    return this.http.post(`${this.endpoint}/upload`, body)
  }

  getDocuments(psicologoId: string, pacienteId: string): Observable<Documentos[]> {
    return this.http.get<Documentos[]>(`${this.endpoint}/psicologos/${psicologoId}/${pacienteId}/documentos`, {headers: this.headers})
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
