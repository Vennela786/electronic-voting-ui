import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  constructor(private fb: FormBuilder, private router: Router, private pollService: PollService, private route: ActivatedRoute) { }

  errorMessage = '';
  isPollUpdateFailed = false;

  getPoll() {
    console.log("pollID---", this.pollId)
    this.pollService.get(this.pollId).subscribe({
      next: (res) => {
        console.log('next-------',res);
        if(res) {
          this.setBalletForm(res);
        }
      },
      error: (err) => {
        console.log("err-----", err)
        this.isPollUpdateFailed = true;
        if(err.error.message) {
          this.errorMessage = err.error.message
        } else {
          this.errorMessage = err.error.errorDefinition.message;
        }
      },
      complete: () =>{}
    })
  }

  setBalletForm(res: any) {
    this.updateBalletform = new FormGroup({
      title: new FormControl(res.title),
      description: new FormControl(res.description),
      startDate: new FormControl(res.startDate),
      endDate: new FormControl(res.endDate),
      pollId: new FormControl(res.pollId)
    })
  }

  onClear(e: any) {
    if (e) e.preventDefault()
    this.getPoll();
  }

  onSubmit() {
    this.pollService.update(this.updateBalletform.value, this.pollId).subscribe({
      next: (res) => {
        console.log('next-------',res);
        if(res) {
          this.router.navigate(['/menu']);
        }
      },
      error: (err) => {
        console.log("err-----", err)
        this.isPollUpdateFailed = true;
        if(err.error.message) {
          this.errorMessage = err.error.message
        } else {
          this.errorMessage = err.error.errorDefinition.message;
        }
      },
      complete: () =>{
        this.updateBalletform.reset()
      }
    })
  }
    
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.pollId = params['pollId']);
    this.getPoll()
  }
  
}