import { Component, OnInit } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import Participant from 'src/app/models/Participant';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  participant:Participant;
  constructor(
    private participantService:ParticipantService,
    private router:Router) { }

  ngOnInit(): void {
    this.participant = new Participant();
  }

  /**
   * Signups signup component
   * @param form 
   */
  signup(form:NgForm) {
    this.participant.age = new Date().getFullYear() - this.participant.dateNaissance.year;
    this.participantService.signup(this.participant).subscribe(participant => {
      console.log("regestred as :", JSON.stringify(participant));
      sessionStorage.setItem("PARTICIPANT", JSON.stringify(participant));
      sessionStorage.setItem('isLoggedIn', "true");
      sessionStorage.setItem('userType', "PARTICIPANT");
      this.router.navigate(['/travaux']);
    });
  }

}
