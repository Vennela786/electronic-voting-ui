import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'view-polls',
  templateUrl: './veiw-poll.html',
  styleUrls: ['./veiw-poll.css']
})
export class ViewPollsComponent implements OnInit {

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


  ngOnInit(): void {
  }
}