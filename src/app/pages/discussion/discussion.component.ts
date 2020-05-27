import { Component, OnInit } from '@angular/core';
import Message from 'src/app/models/message';
import { DiscussionService } from 'src/app/services/discussion.service';
import Participant from 'src/app/models/Participant';
import Formateur from 'src/app/models/formateur';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  messages:Message[];
  messageBody:string;
  sender:string;

  providers: [NgbModalConfig, NgbModal]
  constructor(
    private discussionService:DiscussionService,
    config: NgbModalConfig,
    private modalService: NgbModal) {
      // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
     }

  /**
   * on init
   * get sender  full name
   */
  ngOnInit(): void {
    this.discussionService.getAllMessages().subscribe(messages => {
      console.log(JSON.stringify(messages));
      this.messages = messages;
    });
    if (sessionStorage.getItem("userType") === "PARTICIPANT") {
      let participant:Participant = JSON.parse(sessionStorage.getItem("PARTICIPANT"));
      console.log("participant, ", JSON.stringify(participant));
      this.sender = participant.prenom + " " + participant.nom;
    } else if (sessionStorage.getItem("userType") === "FORMATEUR") {
      let formateur:Formateur = JSON.parse(sessionStorage.getItem("FORMATEUR"));
      console.log("Formateur, ", JSON.stringify(formateur));
      this.sender = formateur.prenom + " " + formateur.nom ;
    } 
  }

  /**
   * Sends message
   */
  sendMessage(){
    let message = new Message();
    message.body = this.messageBody;
    message.sender = this.sender;
    if (!message.sender){
      console.log("Can Not Send Message Without Sender Info");
    }
    this.discussionService.sendMessage(message).subscribe( newMessage => {
      console.log("sent message", JSON.stringify(newMessage));
      this.messages.push(newMessage);
      this.messageBody = ""
    });
  }

  deleteMessage(id:number){
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.message = "Are you sure you want to delete this Message"

    modalRef.result.then(confirm => {
      if (confirm) {
        console.log("Delete Confirmed", confirm);
        this.discussionService.deleteMessage(id).subscribe(resutl => {
          
          const objIndex = this.messages.findIndex(Message => Message.id === id);
          if (objIndex > -1) {
            let deltetedMessages = this.messages.splice(objIndex, 1);
            console.log("Message deleted ! ", JSON.stringify(deltetedMessages));
          }
          modalRef.close();
        });
      }
      console.log("delete Canceled");
      modalRef.dismiss();
    });
  }

  /**
   * Shows control buttons
   * @returns true if control buttons 
   */
  showControlButtons(): boolean {
    return sessionStorage.getItem('isLoggedIn') &&
      sessionStorage.getItem('userType') === "FORMATEUR";
  }
}
