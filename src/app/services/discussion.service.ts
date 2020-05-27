import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Message from '../models/message';

const DISCUSSION_URL = "http://localhost:3000/discussions"
@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  constructor(private http:HttpClient) { }

  /**
   * Gets all messages
   * @returns all messages 
   */
  getAllMessages():Observable<Message[]>{
    return this.http.get<Message[]>(DISCUSSION_URL);
  }

  /**
   * Sends message
   * @param message 
   * @returns message 
   */
  sendMessage(message:Message):Observable<Message>{
    return this.http.post<Message>(DISCUSSION_URL, message);
  }

  deleteMessage(id:number):Observable<any>{
    return this.http.delete(DISCUSSION_URL + "/" + id);
  }

  
}
