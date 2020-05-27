import { Component, OnInit } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { Router } from '@angular/router';
import Participant from 'src/app/models/Participant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password:string;
  email:string;
  errorMsg:string = "";
  constructor(
    private participantService:ParticipantService,
    private router:Router) { }

  ngOnInit(): void {

  }

  /**
   * Logins login component
   */
  login(){
    console.log("login:", this.email, this.password)
    this.participantService.login(this.email, this.password).subscribe(participants => {
      if (!participants[0]){
        this.errorMsg = "Bad Credentials";
        setInterval(() => this.errorMsg = "", 3000)
        return;
      }
      console.log("loged in as: ", JSON.stringify(participants[0]));
      sessionStorage.setItem('PARTICIPANT', JSON.stringify(participants[0]));
      sessionStorage.setItem('isLoggedIn', "true");
      sessionStorage.setItem('userType', "PARTICIPANT");
      this.router.navigate(['/travaux']);
    });
  }

}
