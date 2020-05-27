import { Component, OnInit } from '@angular/core';
import Formateur from 'src/app/models/formateur';
import { Router } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formateur-signup',
  templateUrl: './formateur-signup.component.html',
  styleUrls: ['./formateur-signup.component.css']
})
export class FormateurSignupComponent implements OnInit {

  formateur:Formateur;
  constructor(
    private formateurService:FormateurService,
    private router:Router) { }

  ngOnInit(): void {
    this.formateur = new Formateur();
  }

  /**
   * Signups formateur signup component
   * @param form 
   */
  signup(form:NgForm) {
   this.formateurService.signup(this.formateur).subscribe(formateur => {
      console.log("regestred as :", JSON.stringify(formateur));
      sessionStorage.setItem("formateur", JSON.stringify(formateur));
      sessionStorage.setItem('isLoggedIn', "true");
      sessionStorage.setItem('userType', "FORMATEUT");
      this.router.navigate(['/travaux']);
    });
  }

}