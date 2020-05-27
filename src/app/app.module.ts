import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { TravauxComponent } from './pages/travaux/travaux.component';
import { ParticipantComponent } from './pages/participant/participant.component';
import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { EditParticipantComponent } from './components/edit-participant/edit-participant.component';
import { AddDevoirComponent } from './components/add-devoir/add-devoir.component';
import { EditDevoirComponent } from './components/edit-devoir/edit-devoir.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { FormateurLoginComponent } from './pages/formateur-login/formateur-login.component';
import { FormateurSignupComponent } from './pages/formateur-signup/formateur-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DiscussionComponent,
    TravauxComponent,
    ParticipantComponent,
    AddParticipantComponent,
    EditParticipantComponent,
    AddDevoirComponent,
    EditDevoirComponent,
    SafeUrlPipe,
    LoginComponent,
    SignupComponent,
    ConfirmModalComponent,
    FormateurLoginComponent,
    FormateurSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
