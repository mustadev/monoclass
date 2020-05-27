import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DevoirService } from 'src/app/services/devoir.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Devoir from 'src/app/models/devoir';

/**
 * Add devoir Component
 */
@Component({
  selector: 'app-add-devoir',
  templateUrl: './add-devoir.component.html',
  styleUrls: ['./add-devoir.component.css']
})
export class AddDevoirComponent implements OnInit {
  devoir:any;
  dateNaissance:string;
  constructor(
    private devoirService:DevoirService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.devoir = {};
  }
// submit and add devoir
  /**
   * Submits add devoir component
   * @param form 
   */
  submit(form:NgForm){
    let date = new Date(this.dateNaissance);
    let age = new Date().getFullYear() - date.getFullYear();
    this.devoir.age = age;
    console.log("before server request", JSON.stringify(this.devoir))
    this.devoirService.addDevoir(this.devoir).subscribe((devoir:Devoir) => {
      this.activeModal.close(devoir);
    })
    
  }

}
