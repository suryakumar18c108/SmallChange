import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}
  userBox: string = 'Username';

  public ngOnInit(): void {
    var user = document.getElementById('user');
    var errorMsg = document.querySelector(
      '#username-error'
    ) as HTMLInputElement | null;
    var username = document.getElementById('user') as HTMLInputElement | null;
    var password = document.getElementById(
      'password'
    ) as HTMLInputElement | null;

    user?.addEventListener('focusout', function (event) {
      console.log('username', username?.value);
      console.log('password', password?.value);

      let inputUserTxt = username?.value;
      let inputPasswordTxt = password?.value;

      let regex = /^[a-z0-9-_]{6,24}$/i;

      if (inputUserTxt?.match(regex) === null) {
        console.log('error');
        errorMsg?.classList.remove('username-hide-show');
        user?.classList.add('error-input');
      } else {
        errorMsg?.classList.add('username-hide-show');
        user?.classList.remove('error-input');
      }
    });
  }
}
