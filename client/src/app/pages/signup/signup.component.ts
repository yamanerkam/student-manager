import { Component } from '@angular/core';

import { NgModule } from '@angular/core';

import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FloatLabelModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string = ''
  password: string = ''
  passwordAgain: string = ''

  onSubmit() {
    if (this.email !== '' && this.password !== '' && this.passwordAgain !== '') {
      console.log(this.email, this.password, this.passwordAgain)
      if (this.password === this.passwordAgain) {
        console.log('yes')
      } else {
        console.log('no')
      }
    }
  }


}
