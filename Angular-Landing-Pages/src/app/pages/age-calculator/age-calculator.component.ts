import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

const IS_REQUIRED = 'This field is required'
@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss']
})

export class AgeCalculatorComponent implements OnInit{
  ageForm : FormGroup;
  calculatedDay: any
  calculatedMonth: any
  calculatedYear: any
  yearsText: string = 'years'
  monthText: string = 'months'
  daysText: string = 'days'
  invalid: boolean = true
  isDateNotValid: boolean;
  isDateNotValidText: string = 'Must be a valid date'
  secondValidation: boolean

  ngOnInit() {
    this.ageForm = new FormGroup<any>({
      day: new FormControl(null, [Validators.required, this.validateDay]),
      month: new FormControl(null, [Validators.required, this.validateMonth]),
      year: new FormControl(null, [Validators.required, this.validateYear])
    })
  }

  validateDay(control: AbstractControl){
    const day = control.value
    if(!day){
      return {error: IS_REQUIRED}
    }
    if(day > 31 || day < 1){
      return {error: 'Must be a valid day'}
    }

    return null
  }

  validateMonth(control: AbstractControl){
    const month = control.value

    if(!month){
      return {error: IS_REQUIRED}
    }
    if(month > 12 || month < 1){
      return {error: 'Must be a valid month'}
    }

    return null
  }

  validateYear = (control: AbstractControl) => {
    const year = parseInt(control.value);
    const currentYear = new Date().getFullYear();

    if (!year) {
      return { error: IS_REQUIRED }
    }

    if (year > currentYear) {
      return { error: 'Must be in the past' };
    }
    return null;
  }


  onlyDigits(event: any){
    const pattern = /[0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  isSecondValidation(){
    if(this.secondValidation){
      console.log('here')
      this.isDayValidForMonth() ? this.returnDefault() : null
    }
  }

  returnDefault(){
    this.isDateNotValid = false;
    this.invalid = false;
    this.secondValidation = false;
  }

  isDayValidForMonth(): boolean {
    const dayControl = this.ageForm.get('day');
    const monthControl = this.ageForm.get('month');

    if (dayControl && monthControl) {
      const day = dayControl.value;
      const month = monthControl.value;

      if (day !== null && month !== null) {
        // Calculate the last day of the selected month
        const lastDayOfMonth = new Date(new Date().getFullYear(), month, 0).getDate();

        // Check if the provided day is within the valid range for the selected month
        return day >= 1 && day <= lastDayOfMonth;
      }
    }
    // Return false if either the day or month controls are not available or if their values are null
    return false;
  }

  animateResult(day: number, month: number, year: number) {
    this.calculatedDay  = '0';
    this.calculatedMonth = '0'
    this.calculatedYear = '0'
    let result: number[] = [day, month, year];
    let interval = 1000;

    result.forEach((value, index) => {
      if (value === 0) {
        // If the value is zero, set the corresponding calculated value to zero
        if (index === 0) {
          this.calculatedDay = '0';
        } else if (index === 1) {
          this.calculatedMonth = '0';
        } else if (index === 2) {
          this.calculatedYear = '0';
        }
      } else {
        let startValue = 0;
        let duration = Math.floor(interval / value);
        let counter = setInterval(() => {
          startValue += 1;

          if (index == 0) {
            this.calculatedDay = startValue;
          }

          if (index == 1) {
            this.calculatedMonth = startValue;
          }

          if (index == 2) {
            this.calculatedYear = startValue;
          }

          if (startValue == value) {
            clearInterval(counter);
          }
        }, duration);
      }
    });
  }


  showResult(day: number, month: number, year: number){
    this.daysText = day <= 1 ? 'day' : 'days';
    this.monthText = month <= 1 ? 'month' : 'months';
    this.yearsText = year <= 1 ? 'year' : 'years';
    console.log(day, month, year);
    this.animateResult(day,month, year);
  }

  onSubmit(){
   if(!this.ageForm.valid){
     this.invalid = this.ageForm.valid;
     return
   }

   if(!this.isDayValidForMonth()){
    this.isDateNotValid = true
     this.invalid = true;
    this.secondValidation = true;
   } else {
     const day = this.ageForm.controls['day'].value;
     const month =  this.ageForm.controls['month'].value;
     const year = this.ageForm.controls['year'].value;

     const date = new Date();
     let currentDay = date.getDate();
     let currentMonth = 1 + date.getMonth();
     let currentYear = date.getFullYear();

     const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(day  > currentDay){
      currentDay = day + months[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }
    if(month > currentMonth){
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }
    this.showResult(currentDay - day,currentMonth - month, currentYear - year );
    }
  }
}
