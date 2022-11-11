import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PollService } from '../_services/poll.service';
import { AppGlobals } from '../global/global-config'


@Component({
  selector: 'view-polls',
  templateUrl: './veiw-poll.component.html',
  styleUrls: ['./veiw-poll.component.css']
})
export class ViewPollsComponent implements OnInit {

    constructor(private pollService : PollService, private appGlobals: AppGlobals){}
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

delete(pollId: any) {
    this.pollService.delete(pollId).subscribe({
        next: (res) => {
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
          this.listPoll();
        }
    })
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