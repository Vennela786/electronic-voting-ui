import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    firstName: null,
    lastName:null,
    userName: null,
    password: null,
    confirmPassword: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  signUpForm = FormGroup;
 
  constructor(private authService: AuthService,  private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    // this.signUpForm!:FormGroup;
    this.formBuilder();
  }

  onSubmit(): void {
    console.log('in onsubmit')
    let data = this.formBuilder();
    this.authService.register(data.value).subscribe({
      next: (res) => {
        console.log(res);
        if(res === "Sign up Sucess") {
          this.isSuccessful = true;
          this.router.navigate(['/home']);
        } else {
          this.isSignUpFailed = false;
        }
      },
      error: (err) => {
        console.log("err-----", err)
        this.errorMessage = err.error.text;
        if(this.errorMessage === "Sign up Sucess") {
          this.isSuccessful = true;
          this.router.navigate(['/home']);
        } else {
          this.isSignUpFailed = false;
        }
      },
      complete: () =>{

      }
    })
  }

  formBuilder() {
    const { firstName, lastName, userName, password, confirmPassword } = this.form;
    return (this.fb.group({
        userName: userName,            
        firstName: firstName,
        lastName: lastName,
        password: password,
        confirmPassword: confirmPassword,
        isIndividual: true,
    }));
  }
}