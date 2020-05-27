import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Devoir from '../models/devoir';

const Devoir_URL = "http://localhost:3000/devoirs"
@Injectable({
  providedIn: 'root'
})
export class DevoirService {
  constructor(private http:HttpClient) { }


  /**
   * Gets devoirs
   * @returns devoirs 
   */
  getDevoirs():Observable<Devoir[]>{
    return this.http.get<Devoir[]>(Devoir_URL);
  }


  /**
   * Gets devoir
   * @param id 
   * @returns devoir 
   */
  getDevoir(id:number):Observable<Devoir>{
    return this.http.get<Devoir>(Devoir_URL + "/" + id);
  }


  /**
   * Adds devoir
   * @param devoir 
   * @returns devoir 
   */
  addDevoir(devoir:Devoir):Observable<Devoir>{
    const headers = new HttpHeaders();
    headers.set("Content-Type", "application/json");
    return this.http.post<Devoir>(Devoir_URL, devoir, {headers: headers});
  }

  /**
   * Deletes devoir
   * @param id 
   * @returns devoir 
   */
  deleteDevoir(id:number):Observable<any>{
    return this.http.delete(Devoir_URL + "/" + id);
  }

  /**
   * Updates devoir
   * @param devoir 
   * @returns devoir 
   */
  updateDevoir(devoir:Devoir):Observable<Devoir>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .put<Devoir>(Devoir_URL + "/" + devoir.id, devoir, {headers: headers});
  }
}
