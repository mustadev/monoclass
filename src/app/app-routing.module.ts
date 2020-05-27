import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// components
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { TravauxComponent } from './pages/travaux/travaux.component';
import { ParticipantComponent } from './pages/participant/participant.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ParticipantGuard } from './services/participant.guard';

//formateur component
import { FormateurLoginComponent } from './pages/formateur-login/formateur-login.component';
import { FormateurSignupComponent } from './pages/formateur-signup/formateur-signup.component';
import { FormateurGuard } from './services/formateur.guard';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: '/travaux',pathMatch: 'full'},
  { path: 'discussion', component: DiscussionComponent, canActivate: [ParticipantGuard]},
  { path: 'travaux', component: TravauxComponent, canActivate: [ParticipantGuard]},
  { path: 'participant', component: ParticipantComponent, canActivate: [ParticipantGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'formateur', children: [
    { path: 'login', component: FormateurLoginComponent },
    { path: 'signup', component: FormateurSignupComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
