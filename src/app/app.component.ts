import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
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
  matcher = new MyErrorStateMatcher();

  onSubmit(): void {
    console.log('Your order has been submitted');
  }
}
export class DatepickerOverviewExample {}
