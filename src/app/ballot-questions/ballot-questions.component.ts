import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ballot-questions',
  templateUrl: './ballot-questions.component.html',
  styleUrls: ['./ballot-questions.component.css']
})
export class BallotQuestionsComponent implements OnInit {

  questions:any =[];
  pollId: any;
  constructor(public router: Router, private route:ActivatedRoute ) { }

  addQuestions(){
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     data:""
    //   }
    // }
    this.router.navigate([`/modify-questions/`+this.pollId+`/`+null])
  }

  
  update(pollQuestionId:any) {
    this.router.navigate([`/modify-questions/`+this.pollId+`/`+pollQuestionId])
  }

  listPollQuestions() {
    }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.pollId = params['pollId']);
    this.listPollQuestions();
  }
  // addQuestions(){
  //   let navigationExtras: NavigationExtras = {
  //     state: {
  //       data:""
  //     }
  //   }
  //   this.router.navigate([`/modify-questions/12`] , navigationExtras)
  // }
  // delete(pollQuestionId: any){

  // }
  // update(pollQuestionId:any){

  // }

  // modifyQuestions(list:any){
  //   let navigationExtras: NavigationExtras = {
  //     state: {
  //       data:list
  //     }
  //   }
  //   this.router.navigate([`/modify-questions/12`] , navigationExtras)
  // }
  
}