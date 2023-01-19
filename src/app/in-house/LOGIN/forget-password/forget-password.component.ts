import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/applicant';
import { InhouseService } from 'src/app/app.service';
import { InHouseService } from '../../SERVICES/in-house.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  form: Applicant | undefined;

  loginForm!: FormGroup;
  constructor(private service: InHouseService, private _router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'),
      ]),

      newpassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        ),
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        ),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.loginForm.value.newpassword === this.loginForm.value.confirmpassword
    ) {
      let email = this.loginForm.value.email;
      let password = this.loginForm.value.confirmpassword;
      // console.log(_form)

      this.service.update({ email, password }).subscribe((data: any) => {
        console.log(data.message);
        console.log(this.loginForm.value);
        console.log(this.loginForm.value);
        this._router.navigate(['']);
      });
    }
  }
}
