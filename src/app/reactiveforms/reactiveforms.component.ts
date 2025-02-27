import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css',
})
export class ReactiveformsComponent {
  name = new FormControl('');
  userDetails = new FormGroup({
    username: new FormControl(''),
    Age: new FormControl(''),
    Branch: new FormControl(''),
  });
  updateName() {
    this.name.setValue('ramya');
  }
  onSubmit() {
    console.log(this.userDetails.value);
  }
  onButtonClick() {
    console.log('loggy log');
  }
}
