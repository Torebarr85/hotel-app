import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', [Validators.required]],
      checkOutDate: ['', [Validators.required]],
      guestName: ['', [Validators.required]],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('IS VALID');
    } else {
      alert("form isn't correctly compiled");
    }
  }
}

/*

constructor > quando instazio nuovo form inietta anche il form builder


- on submit > if form is valid ?
- quando? on init
- constructor >  form builder

*/
