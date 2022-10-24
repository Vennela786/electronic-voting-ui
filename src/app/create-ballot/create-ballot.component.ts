import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-ballot',
  templateUrl: './create-ballot.component.html',
  styleUrls: ['./create-ballot.component.css']
})
export class CreateBallotComponent implements OnInit {
  balletform: any = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formBuilder();
  }

  formBuilder() {
    const { title, description, startDate, endDate } = this.balletform;
    return (this.fb.group({
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate
    }));
  }

  onClear(e: any) {
    if (e) e.preventDefault()
    this.balletform.reset({
      "title": "",
      "description": "",
      "startDate": "",
      "endDate": "",
    })
  }
  onSubmit() {

    console.log(this.balletform.value)
    this.balletform.reset()
    this.router.navigate(['/menu']);

  }

}
