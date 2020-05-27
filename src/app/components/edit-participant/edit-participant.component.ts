import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ParticipantService } from 'src/app/services/participant.service';
import Participant from 'src/app/models/Participant';

@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {
// participant
  public participant:Participant;
  constructor(
    private participantService:ParticipantService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  // submit and save participant
  /**
   * Submits edit participant component
   * @param form 
   */
  submit(form:NgForm){
    this.participant.age = new Date().getFullYear() - this.participant.dateNaissance.year;
    console.log("before server request", JSON.stringify(this.participant))
    this.participantService.updateParticipant(this.participant).subscribe((participant:Participant) => {
      this.activeModal.close(participant);
    })
    
  }
}