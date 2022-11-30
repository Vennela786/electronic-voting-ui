import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute, Params } from '@angular/router';
import { AppGlobals } from '../global/global-config';
import { PollQuestionsService } from '../_services/poll-questions.service';


@Component({
  selector: 'app-ballot-questions',
  templateUrl: './ballot-questions.component.html',
  styleUrls: ['./ballot-questions.component.css']
})
export class BallotQuestionsComponent implements OnInit {

  questions:any =[];
  pollId: any;
  errorMessage = '';

  constructor(private pollQuestionService : PollQuestionsService, private appGlobals: AppGlobals, private router: Router, 
    private route: ActivatedRoute){}

  addQuestions(){
    let navigationExtras: NavigationExtras = {
      state: {
        data:""
      }
    }
    this.router.navigate([`/modify-questions/12`] , navigationExtras)
  }
  delete(pollQuestionId: any){

  }
  update(pollQuestionId:any){

  }

  listPollQuestions() {
    this.pollQuestionService.list(this.pollId).subscribe({
        next: (res) => {
            this.questions = [];
          console.log('next-------',res);
          if(res) {
            this.questions = res;
          }
        },
        error: (err) => {
          console.log("err-----", err)
          if(err.error.message) {
            this.errorMessage = err.error.message
          } else {
            this.errorMessage = err.error.errorDefinition.message;
          }
        },
        complete: () =>{}
      })
}

  modifyQuestions(list:any){
    let navigationExtras: NavigationExtras = {
      state: {
        data:list
      }
    }
    this.router.navigate([`/modify-questions/12`] , navigationExtras)
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.pollId = params['pollId']);
    this.listPollQuestions();
  }
}