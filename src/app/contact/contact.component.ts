import { HeaderComponent } from './../header/header.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  @Input() selectedPosthero: any;
  constructor() {
  }

  // createFormControls() {
  //   this.firstName = new FormControl('', Validators.required);
  //   this.lastName = new FormControl('', Validators.required);
  //   this.email = new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[^ @]*@[^ @]*')
  //   ]);
  //   this.password = new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8)
  //   ]);
  //   this.language = new FormControl('', Validators.required);
  // }


  ngOnInit() {
    // this.createFormControls();
    this.createForm();
  }

  createForm = () => {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      language: new FormControl('', Validators.required)
    });
  }
  onSubmit = () => {
    // if (this.myform.valid) {
    console.log('Form Submitted!');
    console.log(this.myform.value);
    this.myform.reset();
    // }
  }

}
