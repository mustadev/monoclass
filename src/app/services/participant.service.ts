import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Participant from '../models/Participant';

const PARTICIPANT_URL = "http://localhost:3000/participants";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  
  constructor(private http:HttpClient) { }

  getParticipants():Observable<Participant[]>{
    return this.http.get<Participant[]>(PARTICIPANT_URL);
  }

  getParticipant(id:number):Observable<Participant>{
    return this.http.get<Participant>(PARTICIPANT_URL + "/" + id);
  }

  addParticipant(participant:Participant):Observable<Participant>{
    const headers = new HttpHeaders();
    headers.set("Content-Type", "application/json");
    return this.http.post<Participant>(PARTICIPANT_URL, participant, {headers: headers});
  }

  deleteParticipant(id:number):Observable<any>{
    return this.http.delete(PARTICIPANT_URL + "/" + id);
  }

  updateParticipant(participant:Participant):Observable<Participant>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .put<Participant>(PARTICIPANT_URL + "/" + participant.id, participant, {headers: headers});
  }

  login(email:string, password:string):Observable<Participant[]> {
    const params = new HttpParams()
      .set("email", email)
      .set("password", password)
      .set("_limit", "1");
    return this.http.get<Participant[]>(PARTICIPANT_URL, {params: params});
  }

  signup(participant:Participant):Observable<Participant>{
    const headers = new HttpHeaders();
    headers.set("Content-Type", "application/json");
    return this.http.post<Participant>(PARTICIPANT_URL, participant, {headers: headers});
  }
}
