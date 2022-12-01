import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  questions:any =[];
  constructor(public router: Router) { }

  addQuestions(){
    let navigationExtras: NavigationExtras = {
      state: {
        data:""
      }
    }
    this.router.navigate([`/modify-questions/12`] , navigationExtras)
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
   this.questions = [
    {
      "question": "Question 1",
      "options": [
        {
          "allowedResponseOptionId": 17,
          "pollQuestionId": 10,
          "option": "Excellent",
          "correct": true
        },
        {
          "allowedResponseOptionId": 18,
          "pollQuestionId": 10,
          "option": "Superb",
          "correct": false
        },
        {
          "allowedResponseOptionId": 18,
          "pollQuestionId": 10,
          "option": "Awesome",
          "correct": false
        }
      ],
      "pollId": 9,
      "pollQuestionId": 10,
      "responseOptionId": null
    },
    {
      "question": "Question 2",
      "options": [
        {
          "allowedResponseOptionId": 19,
          "pollQuestionId": 11,
          "option": "option 1",
          "correct": true
        },
        {
          "allowedResponseOptionId": 20,
          "pollQuestionId": 11,
          "option": "option 2",
          "correct": false
        }
      ],
      "pollId": 9,
      "pollQuestionId": 11,
      "responseOptionId": null
    },
    {
      "question": "Question 3",
      "options": [
        {
          "allowedResponseOptionId": 21,
          "pollQuestionId": 12,
          "option": "option 1",
          "correct": true
        },
        {
          "allowedResponseOptionId": 22,
          "pollQuestionId": 12,
          "option": "option 2",
          "correct": false
        }
      ],
      "pollId": 9,
      "pollQuestionId": 12,
      "responseOptionId": null
    }
  ]
  }
}