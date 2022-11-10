import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-poll',
  templateUrl: './edit-poll.html',
  styleUrls: ['./edit-poll.css']
})
export class EditPollComponent implements OnInit {
  constructor(private router: Router) { }
    
  ngOnInit(): void {
  }
  
}