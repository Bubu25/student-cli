import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

/**
 * injectable: decorateur signifiant que c'est angular
 * qui se chargera de faire une instance de la classe
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  private static readonly _API_ROOT_: string = 'http://localhost:5000/';

  constructor(private httpClient: HttpClient) { }

  public getAllStudents(): Observable<any>{
    return this.httpClient.get(
      ApiService._API_ROOT_ + 'eleve'
    );
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(
      ApiService._API_ROOT_+ 'eleve/'+id,
      {
        observe:'response'
      }
    );
  }
  public add(student:Student):Observable<any>{
    return this.httpClient.post(
      ApiService._API_ROOT_ +'eleve',
      student
    );

  }
}
