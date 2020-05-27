import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Formateur from '../models/formateur';

const FORMATEUR_URL:string = "http://localhost:3000/formateurs"

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http:HttpClient) { }


  /**
   * Logins formateur service
   * @param email 
   * @param password 
   * @returns login 
   */
  login(email:string, password:string):Observable<Formateur[]> {
    const params = new HttpParams()
      .set("email", email)
      .set("password", password)
      .set("_limit", "1");
    return this.http.get<Formateur[]>(FORMATEUR_URL, {params: params});
  }

  /**
   * Signups formateur service
   * @param formateur 
   * @returns signup 
   */
  signup(formateur:Formateur):Observable<Formateur>{
    const headers = new HttpHeaders();
    headers.set("Content-Type", "application/json");
    return this.http.post<Formateur>(FORMATEUR_URL, Formateur, {headers: headers});
  }
}
