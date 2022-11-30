import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-modify-questions',
  templateUrl: './modify-questions.component.html',
  styleUrls: ['./modify-questions.component.css']
})
export class ModifyQuestionsComponent implements OnInit {
  data: any;
  QuestionData: any;
  OptionsData: any;
  modifyQuestionForm:FormGroup;
  constructor(public activatedRoute: ActivatedRoute, public router: Router,private fb:FormBuilder) {
    this.data = this.router.getCurrentNavigation();
    let temp = this.data.extras.state;
    this.QuestionData = temp.data.question;
    this.OptionsData = this.data.extras.state.data.options;
    console.log(this.data.extras.state.data , this.data.extras.state.data.question);
    this.modifyQuestionForm = new FormGroup({})
   }

  ngOnInit(): void {
    console.log("sdvs");
    this.modifyQuestionForm = new FormGroup({
      'questions':new FormControl(''),
      'options':this.fb.array([])
    });
    
  }

  onAddOptions() {
    const optionForm = this.fb.group({
      option: ['', Validators.required],
      selected: ['', Validators.required]
    });
    this.options.push(optionForm);
  }

  get options() {
    return this.modifyQuestionForm.controls["options"] as FormArray;
  }

  // onAddOptions(){

  //   const control=new FormControl(null,Validators.required);
  //   (<FormArray>this.modifyQuestionForm.get('options')).push(control);
  // }

  
}

