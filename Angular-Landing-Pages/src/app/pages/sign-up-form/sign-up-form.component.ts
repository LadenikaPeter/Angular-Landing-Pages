import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit{
  signUpForm: FormGroup;
  invalid: boolean = true;

  ngOnInit() {
    this.signUpForm = new FormGroup<any>({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    if(!this.signUpForm.valid){
      this.invalid = this.signUpForm.valid;
      return
    }
    alert("Successful!")
    this.invalid = true;
    console.log(this.signUpForm.value)
    this.signUpForm.reset()
  }
}

