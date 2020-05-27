import { Component, OnInit } from '@angular/core';
import Devoir from 'src/app/models/devoir';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DevoirService } from 'src/app/services/devoir.service';
import { AddDevoirComponent } from 'src/app/components/add-devoir/add-devoir.component';
import { EditDevoirComponent } from 'src/app/components/edit-devoir/edit-devoir.component';
import { ConfirmModalComponent } from 'src/app/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-travaux',
  templateUrl: './travaux.component.html',
  styleUrls: ['./travaux.component.css']
})
export class TravauxComponent implements OnInit {

  devoirs: Devoir[];
  providers: [NgbModalConfig, NgbModal]
  constructor(
    private devoirService: DevoirService,
    config: NgbModalConfig,
    private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit(): void {
    this.devoirService.getDevoirs().subscribe((devoirs: Devoir[]) => {
      this.devoirs = devoirs;
      console.log("Devoir: ", JSON.stringify(this.devoirs));
    });

  }

  /**
   * Adds devoir
   */
  addDevoir() {
    const modalRef = this.modalService.open(AddDevoirComponent);
    modalRef.result.then(Devoir => {
      console.log("result of module", Devoir);
      this.devoirs.push(Devoir);
    })
  }

  /**
   * Deletes devoir
   * @param id 
   */
  deleteDevoir(id: number) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.message = "Are you sure you want to delete this Devoir"

    modalRef.result.then(confirm => {
      if (confirm) {
        console.log("Delete Confirmed", confirm);
        this.devoirService.deleteDevoir(id).subscribe(resutl => {
          
          const objIndex = this.devoirs.findIndex(devoir => devoir.id === id);
          if (objIndex > -1) {
            let deltetedDevoirs = this.devoirs.splice(objIndex, 1);
            console.log("Devoir deleted ! ", JSON.stringify(deltetedDevoirs));
          }
          modalRef.close();
        });
      }
      console.log("delete Canceled");
      modalRef.dismiss();
    })
  }

  /**
   * Edits devoir
   * @param id 
   */
  editDevoir(id: number) {
    console.log("edit user id: ", id);
    let devoir = this.devoirs.find((part) => part.id === id);
    console.log("edit Devoir: ", JSON.stringify(Devoir))
    if (devoir === undefined) {
      console.log("can't find Devoir ", id);
      return
    }

    const modalRef = this.modalService.open(EditDevoirComponent);
    modalRef.componentInstance.devoir = devoir
    modalRef.result.then(Devoir => {
      console.log("result edit module", Devoir);
      //this.Devoirs.push(Devoir);
    })
  }
  /**
   * Gets Youtube embed url
   * @param ytbUrl 
   * @returns ytb embed url 
   */
  getYtbEmbedUrl(ytbUrl: string): string {
    let videoUrl = ytbUrl.split('=')[1];
    // console.log("video Url id: ", videoUrl);
    videoUrl = "https://www.youtube.com/embed/" + videoUrl;
    // console.log("video Url: ", videoUrl);
    return videoUrl;
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
