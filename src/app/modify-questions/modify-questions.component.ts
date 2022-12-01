import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { PollQuestionsService } from '../_services/poll-questions.service';

@Component({
  selector: 'app-modify-questions',
  templateUrl: './modify-questions.component.html',
  styleUrls: ['./modify-questions.component.css']
})
export class ModifyQuestionsComponent implements OnInit {
  data: any;
  QuestionData: any;
  OptionsData: any;
  pollId: any;
  pollQuestionId: any;
  errorMessage = '';
  isPollQuestionUpdateFailed = false;

  modifyQuestionForm: any = new FormGroup({
    question:new FormControl(''),
    pollQuestionId: new FormControl(''),
    options:this.option()
    
  });
  constructor(public activatedRoute: ActivatedRoute, public router: Router,private fb:FormBuilder, private route: ActivatedRoute, 
    private pollQuestionsService: PollQuestionsService) {
    // this.data = this.router.getCurrentNavigation();
    // let temp = this.data.extras.state;
    // this.QuestionData = temp.data.question;
    // this.OptionsData = this.data.extras.state.data.options;
    // console.log(this.data.extras.state.data , this.data.extras.state.data.question);
    
   }

   getPollQuestion() {
    
  }

  

  setOption(option: any) {
    return this.fb.group({
      option: new FormControl(option.option),
      correct: new FormControl(option.correct),
      allowedResponseOptionId: new FormControl(option.allowedResponseOptionId)
    })
  }

  ngOnInit(): void {
    console.log("sdvs");
    this.route.params.subscribe((params: Params) => this.pollId = params['pollId']);
    this.route.params.subscribe((params: Params) => this.pollQuestionId = params['pollQuestionId']);
    if(this.pollQuestionId != null) {
      this.getPollQuestion();
    }
  }

  option() {
    let optionList: FormArray = this.fb.array([]);
    optionList.push(this.emptyOption())
    optionList.push(this.emptyOption())
    return optionList
  }

  emptyOption() {
    return this.fb.group({
      option: ['', Validators.required],
      correct: ['']
    });
  }

  // get options() {
  //   return this.modifyQuestionForm.controls["options"] as FormArray;
  // }

  // onAddOptions(){

  //   const control=new FormControl(null,Validators.required);
  //   (<FormArray>this.modifyQuestionForm.get('options')).push(control);
  // }

  
}
