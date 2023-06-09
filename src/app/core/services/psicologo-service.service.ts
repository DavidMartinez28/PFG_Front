import { Injectable } from '@angular/core';
import {Documentos, PacientePsicologo,SignInResponse, User, UserData, UserProfile, UserResponse } from '../models/user';
import { Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Invitaciones, InvitacionesPendientes, Pacientes, Relacion } from 'src/app/pages/invitaciones/models/invitaciones.models';
import { Sesion } from 'src/app/pages/sesiones/models/sesiones';

@Injectable({
  providedIn: 'root'
})
export class PsicologoServiceService {

  //Definimos el endpoint y los headers para poder realizar la petición
  endpoint: string = 'https://psychogood.onrender.com/api';
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

  deleteInvitacion(idInvitacion: string): Observable<any> {
    return this.http.delete(`${this.endpoint}/delete-invitaciones/${idInvitacion}`);
  }

  getInvitaciones(psicologoId: string): Observable<InvitacionesPendientes[]> {
    return this.http.get<InvitacionesPendientes[]>(`${this.endpoint}/psicologos/${psicologoId}/invitaciones`, {headers: this.headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  getInvitacionesPacientes(pacienteId: string): Observable<InvitacionesPendientes[]> {
    return this.http.get<InvitacionesPendientes[]>(`${this.endpoint}/pacientes/${pacienteId}/invitaciones`, {headers: this.headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  eliminarPaciente(id_psicologo: string, id_paciente: string): Observable<any> {
    return this.http.delete(`${this.endpoint}/psicologos/${id_psicologo}/eliminar-paciente/${id_paciente}`);
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

  eliminarDocumento(idDocumento: string){
    return this.http.delete(`${this.endpoint}/delete/documentos/${idDocumento}`);
  }

  crearSesion(sesion: Sesion): Observable<Sesion> {
    let api = `${this.endpoint}/create-sesion`;
    return this.http.post<Sesion>(api, sesion)
      .pipe(
        catchError(this.handleError.bind(this))
      )
  }

  eliminarSesion(idSesion: string): Observable<any> {
    return this.http.delete(`${this.endpoint}/delete-sesion/${idSesion}`);
  }

  obtenerSesionesPorPsicologo(id_psicologo: string): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(`${this.endpoint}/sesiones/${id_psicologo}`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  obtenerSesionesPorPacientes(id_psicologo: string, id_paciente: string): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(`${this.endpoint}/sesiones/psicologo/${id_psicologo}/paciente/${id_paciente}`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  obtenerSesionesPasadasPorPacientes(id_psicologo: string, id_paciente: string): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(`${this.endpoint}/sesiones/psicologo/${id_psicologo}/paciente/${id_paciente}/anteriores`)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }


  cambiarVisibilidad(documento: Documentos): Observable<Documentos> {
    return this.http.put<Documentos>(`${this.endpoint}/documentos-estado/${documento._id}`, documento)
      .pipe(
        catchError(this.handleError.bind(this))
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
