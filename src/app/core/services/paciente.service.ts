import { Injectable } from '@angular/core';
import {
  PsicologoPaciente, UserProfile,
} from '../models/user';
import { Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Relacion } from 'src/app/pages/invitaciones/models/invitaciones.models'; 

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  //Definimos el endpoint y los headers para poder realizar la petición
  endpoint: string = 'https://psychogood.onrender.com/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) {}


  getPsicologos(pacienteId: string): Observable<PsicologoPaciente[]> {
    return this.http.get<PsicologoPaciente[]>(`${this.endpoint}/pacientes/${pacienteId}/psicologos`, {headers: this.headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  crearRelacion(relacion: Relacion): Observable<any> {
    return this.http.post(`${this.endpoint}/crear-relacion`, relacion);
  }

  getPsicologoById(psicologoId: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.endpoint}/psicologo/${psicologoId}`, {headers: this.headers})
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
