import { Component, OnInit, Input } from '@angular/core';
import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  public message:string;
  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  /**
   * Confirm modal component 
   * confirms operation by passing true to NgbActiveModal
   */
  confirm(){
    this.activeModal.close(true);
  }

  /**
   * Cancel  modal component 
   * cancels operation by passing false to NgbActiveModal
   */
  cancel(){
    this.activeModal.close(false);
  }
  
}
