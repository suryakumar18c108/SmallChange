import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userInput: string = '';
  constructor() {}

  ngOnInit(): void {}

  userErrMsg: string =
    'Invalid Username - Must contain between 3 and 18 letters, numbers, underscores or hyphens.';
  userErr: boolean = false;
  checkUsername(val: string) {
    var error = document.querySelector('.error');
    var username = document.querySelector('.text-box');
    var valid = /^[a-zA-Z0-9_-]+$/;
    if (!valid.test(val) || val.length < 3 || val.length > 18) {
      console.log('Invalid username');
      // username.style.borderColor = "#DC1616";
      this.userErr = true;
    } else {
      console.log('Valid username');
      // username.style.borderColor = "black";
      this.userErr = false;
      // error.style.display = "none";
    }
  }

  // password : string = "Password";
  passErrMsg: string =
    'Invalid Password - Must contain between 6 and 24 letters, numbers, underscores or hyphens.';
  passErr: boolean = false;
  validatePassword(val: string) {
    var password = document.querySelector('.pwd-text');
    var error = document.querySelector('.passerror');
    var valid = /^[a-zA-Z0-9_-]+$/;
    if (!valid.test(val) || val.length < 6 || val.length > 24) {
      if (!password?.classList.contains('invalid'))
        password?.classList.add('invalid');
      console.log('InValid pw');
      // password.style.border = "solid";
      // password.style.borderColor = "#DC1616";
      this.passErr = true;
    } else {
      console.log('Valid pw');
      if (!password?.classList.contains('invalid'))
        password?.classList.remove('invalid');
      // password.style.border = "none";
      this.passErr = false;
    }
  }
}
