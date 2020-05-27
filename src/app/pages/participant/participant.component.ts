import { Component, OnInit, NgModuleRef } from '@angular/core';
import  Participant  from "src/app/models/Participant";
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddParticipantComponent } from 'src/app/components/add-participant/add-participant.component';
import { ParticipantService } from 'src/app/services/participant.service';
import { EditParticipantComponent } from 'src/app/components/edit-participant/edit-participant.component';
import { ConfirmModalComponent } from 'src/app/components/confirm-modal/confirm-modal.component';
import Devoir from 'src/app/models/devoir';
import { DevoirService } from 'src/app/services/devoir.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  // participants:Participant[] = [
  //   new Participant(0, "max", "plank", 88, "max@palnk.com", "0666666611"),
  //   new Participant(1,  "neils","bohr",  77, "neils@bohr.com", "0766666611"),
  //   new Participant(2, "rick", "morty", 88, "rick@morty.com", "0555666611"),
  //   new Participant(3,  "jon","wick",  77, "jon@wick.com", "0788666611"),
  //   new Participant(4, "tony", "ferguson", 88, "tony@ferguson.com", "0758666611"),
  //   new Participant(5,  "hommer","simpson",  77, "hommer@simpson.com", "0766666611"),
  // ]

  participants:Participant[];
  devoirs:Devoir[];
  
  providers: [NgbModalConfig, NgbModal]
  constructor(
    private participantService:ParticipantService,
    private devoirService:DevoirService,
    config: NgbModalConfig, 
    private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  // get init participants
  ngOnInit(): void {
    this.participantService.getParticipants().subscribe((participants:Participant[]) => {
      this.participants = participants;
      console.log("Participant: ", JSON.stringify(this.participants));
    });
    this.devoirService.getDevoirs().subscribe((devoirs:Devoir[]) => {
      this.devoirs = devoirs;
      console.log("Devoir: ", JSON.stringify(this.devoirs));
    });
  }

  // add participant
  /**
   * Adds participant
   */
  addParticipant() {
    const modalRef = this.modalService.open(AddParticipantComponent);
    modalRef.result.then( participant => {
      console.log("result of module", participant);
      this.participants.push(participant);
    });
  }
// delete Participant participant
  /**
   * Deletes participant
   * @param id 
   */
  deleteParticipant(id:number){
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.message = "Are you sure you want to delete this Participant"
    modalRef.result.then(confirm => {
      if (confirm){
        console.log("Delete Confirmed", confirm);
        this.participantService.deleteParticipant(id).subscribe(resutl => {
          const objIndex = this.participants.findIndex(devoir => devoir.id === id);
          if (objIndex > -1) {
            let deltetedParticipants = this.participants.splice(objIndex, 1);
            console.log("Devoir deleted ! ", JSON.stringify(deltetedParticipants));
          }
          modalRef.close();
        });
      }
      console.log("delete Canceled");
      modalRef.dismiss();
      //this.participants.push(participant);
    })
  }
// edit participant
  /**
   * Edits participant
   * @param id 
   */
  editParticipant(id:number){
    console.log("edit user id: ", id);
    let participant = this.participants.find((part) => part.id === id);
    console.log("edit participant: ", JSON.stringify(participant))
    if (participant === undefined){
      console.log("can't find participant ", id);
      return
    }

    const modalRef = this.modalService.open(EditParticipantComponent);
    modalRef.componentInstance.participant = participant 
    modalRef.result.then( participant => {
      console.log("result edit module", participant);
      //this.participants.push(participant);
    })
  }

  /**
   * Shows edit button
   * @param id 
   * @returns true if edit button 
   */
  showEditButton(id: number):boolean {
    console.log('id ', id);
    if (sessionStorage.getItem("PARTICIPANT") === null) return false;
    let parJson = sessionStorage.getItem("PARTICIPANT");
    console.log('from session', parJson);
    let participant:Participant = JSON.parse(parJson);
    return participant.id === id;
  }

  /**
   * Shows all control buttons
   * @returns true if User type is Formateur 
   */
  showAllControlButtons():boolean {
    return sessionStorage.getItem("userType") === "FORMATEUR"
  }

}
