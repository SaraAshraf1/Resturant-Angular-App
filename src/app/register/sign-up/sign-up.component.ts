import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../register.component.css'],
})
export class SignUpComponent implements OnInit {
  model: any = {};
  constructor() {}
  onloginLinkClick() {
    (<any>$('#registertab a[href="#loginPanel"]')).tab('show');
  }
  ngOnInit(): void {}
  log(f) {
    console.log(f);
  }
  mustMatch(password: string, confirmedPassword: string) {
    const passwordControl = new FormControl(password);
    const confirmedPasswordControl = new FormControl(confirmedPassword);
    if (passwordControl.value !== confirmedPasswordControl.value) {
      confirmedPasswordControl.setErrors({ mustMatch: true });
    }
    return confirmedPassword;
  }
}
