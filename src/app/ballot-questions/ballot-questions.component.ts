import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Params, Router, ActivatedRoute } from '@angular/router';
import { VoterService } from '../_services/voter.service';
import { AppGlobals } from '../global/global-config';

@Component({
  selector: 'app-ballot-questions',
  templateUrl: './ballot-questions.component.html',
  styleUrls: ['./ballot-questions.component.css']
})
export class BallotQuestionsComponent implements OnInit {

  questions:any =[];
  pollId: any;
  voters: any = [];
  partyId:any = null;
  errorMessage = '';
  isAddVoterFailed = false;
  isAddVoterSuccess = false;
  successMessage = ''
  constructor(public router: Router, private route:ActivatedRoute, private voterService: VoterService, private appGlobals: AppGlobals ) { }

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

  delete(pollQuiestionId: any) {}

  addVoter(prtyId: any){
    this.isAddVoterFailed = false;
    this.isAddVoterSuccess = false
    let partyForm: any = new FormGroup({
      partyId: new FormControl(this.partyId)
    })
    this.voterService.addVoter(partyForm.value, this.pollId).subscribe({
      next: (res) => {
        console.log('next-------',res);
        if(res) {
          this.isAddVoterSuccess = true;
          this.successMessage = 'User add as Voter for this poll'
        }
      },
      error: (err) => {
        console.log("err-----", err)
        this.isAddVoterFailed = true;
        if(err.error.message) {
          this.errorMessage = err.error.message
        } else {
          this.errorMessage = err.error.errorDefinition.message;
        }
      },
      complete: () =>{
        this.voters = [];
      }
    })
    console.log(this.partyId)
  }

  getVoters() {
    console.log("in getVoter")
    this.voterService.listVoter(this.appGlobals.loginUserDetail.loginId).subscribe({
      next: (res) => {
          this.voters = [];
        console.log('next-------',res);
        if(res) {
          this.voters = res;
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
      complete: () =>{
        
      }
    })
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