import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  myForm: FormGroup;

  //form state
  loading = false;
  success = false;

  constructor(private fb: FormBuilder/*, private afs: AngularFirestore*/) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
    //this.myForm.valueChanges.subscribe(console.log);
  }

  get email() {
    return this.myForm.get('email');
  }

  get message() {
    return this.myForm.get('message');
  }

  /*async submitHandler() {
    this.loading = true;
    const formValue = this.myForm.value;
    try {
      await this.afs.collection('contacts').add(formValue);
      this.success = true;
    } catch (err) {
      console.log(err);
    }

    this.loading = false;
  }*/
}
