import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PollService } from '../_services/poll.service';

@Component({
  selector: 'app-edit-poll',
  templateUrl: './edit-poll.component.html',
  styleUrls: ['./edit-poll.component.css']
})
export class EditPollComponent implements OnInit {

  pollId: number = 0;
  updateBalletform: any = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    pollId: new FormControl('')
  })
  constructor(private fb: FormBuilder, private router: Router, private pollService: PollService, private activatedRoute: ActivatedRoute) { }

  errorMessage = '';
  isPollUpdateFailed = false;

  getPoll() {
    
  }

  

  onClear(e: any) {
    if (e) e.preventDefault()
    this.getPoll();
  }

  onSubmit() {
    
  }
    
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['pollId'] !== undefined) {
          this.pollId = +params['pollId'];
      }
  });
  }
  
}