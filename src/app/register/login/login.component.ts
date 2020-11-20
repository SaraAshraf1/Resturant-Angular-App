import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor() {}
  onSignupLinkClick() {
    (<any>$('#registertab a[href="#signupPanel"]')).tab('show');
  }
  log(loginForm) {
    console.log(this.model);
    console.log(loginForm);
  }
  ngOnInit(): void {}
}
