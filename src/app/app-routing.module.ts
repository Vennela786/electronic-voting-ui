import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CreateBallotComponent } from './create-ballot/create-ballot.component'
import { ViewPollsComponent } from './veiw-poll/view-poll.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditPollComponent } from './edit-poll/edit-poll.component';
import { BallotQuestionsComponent } from './ballot-questions/ballot-questions.component';
import { ModifyQuestionsComponent } from './modify-questions/modify-questions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'menu', component: MainMenuComponent },
  { path: 'createBallot', component: CreateBallotComponent },
  { path: 'view-poll', component: ViewPollsComponent },
  { path: 'edit-poll/:pollId', component: EditPollComponent},
  { path : 'list-questions/:pollId', component: BallotQuestionsComponent},
  { path : 'modify-questions/:pollId', component: ModifyQuestionsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
