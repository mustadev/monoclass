import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import Participant from 'src/app/models/Participant';
import { ParticipantService } from 'src/app/services/participant.service';

/**
 * Add Participant Component
 */
@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  participant:Participant;
  constructor(
    private participantService:ParticipantService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.participant = new Participant();
  }

  // submit and add participant
  /**
   * Submits add participant component
   * @param form 
   */
  submit(form:NgForm){
    this.participant.age = new Date().getFullYear() - this.participant.dateNaissance.year;
    console.log("before server request", JSON.stringify(this.participant))
    this.participantService.addParticipant(this.participant).subscribe((participant:Participant) => {
      this.activeModal.close(participant);
    });
  }

}
