import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';

@Component({
  selector: 'view-polls',
  templateUrl: './veiw-poll.html',
  styleUrls: ['./veiw-poll.css']
})
export class ViewPollsComponent implements OnInit {
  constructor(private router: Router) { }
  editPoll(): void {
    //console.log('editpoll')
    this.router.navigate(['/edit']);
  } 


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