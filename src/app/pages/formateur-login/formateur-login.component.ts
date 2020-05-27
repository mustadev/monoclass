import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/services/formateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formateur-login',
  templateUrl: './formateur-login.component.html',
  styleUrls: ['./formateur-login.component.css']
})
export class FormateurLoginComponent implements OnInit {

  password:string;
  email:string;
  constructor(
    private formateurService:FormateurService,
    private router:Router) { }

  ngOnInit(): void {

  }

  /**
   * Logins formateur login component
   */
  login(){
    console.log("login:", this.email, this.password)
    this.formateurService.login(this.email, this.password).subscribe(formateur => {
      console.log("loged in as: ", JSON.stringify(formateur[0]));
      sessionStorage.setItem('FORMATEUR', JSON.stringify(formateur[0]));
      sessionStorage.setItem('isLoggedIn', "true");
      sessionStorage.setItem('userType', "FORMATEUR");
      this.router.navigate(['/discussion']);
    });
  }

}
