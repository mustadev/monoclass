import { Component, OnInit } from '@angular/core';
import { DevoirService } from 'src/app/services/devoir.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import Devoir from 'src/app/models/devoir';

@Component({
  selector: 'app-edit-devoir',
  templateUrl: './edit-devoir.component.html',
  styleUrls: ['./edit-devoir.component.css']
})
export class EditDevoirComponent implements OnInit {
  public devoir:Devoir;
  dateNaissance:string;
  constructor(
    private devoirService:DevoirService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  /**
   * Submits edit devoir component
   * @param form 
   */
  submit(form:NgForm){
    console.log("before server request", JSON.stringify(this.devoir))
    this.devoirService.updateDevoir(this.devoir).subscribe((devoir:Devoir) => {
      this.activeModal.close(devoir);
    })
    
  }
}