import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormGroup,Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.pattern('[a-zA-Z ]*')
  ]);
  surNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.pattern('[a-zA-Z ]*')
  ]);
  birthDateFormControl = new FormControl('', [
    Validators.required,
    // Validators.pattern('^[0-9/]$')
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  mobileFormControl = new FormControl('', [
    Validators.pattern('[0-9]*'),
    Validators.minLength(9),
    Validators.maxLength(9)
  ]);
  
  registrationForm = new FormGroup({
    nameFormControl: this.nameFormControl,
    surNameFormControl:  this.surNameFormControl,
    birthDateFormControl:  this.birthDateFormControl,
    emailFormControl:  this.emailFormControl,
    mobileFormControl:  this.mobileFormControl
  });


  matcher = new MyErrorStateMatcher();


  onSubmit(): void {
    if(this.registrationForm.valid) {
      console.warn('Succesfull registration!', this.registrationForm.value);
      this.registrationForm.reset();
      this.matcher = new MyErrorStateMatcher();
    }
    else{
      //Never called because submit button is disabled. Possible TODO to let the know for incorrect fill form.  
        console.log("You didn't fill the form correctly.")
    }
  }
}
export class DatepickerOverviewExample {}
