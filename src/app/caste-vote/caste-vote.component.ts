import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../_services/poll.service';
import { AppGlobals } from '../global/global-config'


@Component({
  selector: 'app-caste-vote',
  templateUrl: './caste-vote.component.html',
  styleUrls: ['./caste-vote.component.css']
})
export class CasteVoteComponent implements OnInit {

  constructor(private pollService : PollService, private appGlobals: AppGlobals, private router: Router){}
    errorMessage = '';
   viewPollMock : any[]= [
    {
        title: "title 1",
        startDate: "2022-11-10",
        endDate: "2022-11-10",
    }, {
        title: "title 2",
        startDate: "2022-11-10",
        endDate: "2022-11-10",
    }, {
        title: "title 3",
        startDate: "2022-11-10",
        endDate: "2022-11-10",
    }, {
        title: "title 3",
        startDate: "2022-11-10",
        endDate: "2022-11-10",
    },

];
vote(pollId:any){
  this.router.navigate(['/casteVote/' + pollId]);
}
listPoll() {
  this.pollService.list(this.appGlobals.loginUserDetail.loginId).subscribe({
      next: (res) => {
          this.viewPollMock = [];
        console.log('next-------',res);
        if(res) {
          this.viewPollMock = res;
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

  ngOnInit(): void {
    this.listPoll();
  }

}
