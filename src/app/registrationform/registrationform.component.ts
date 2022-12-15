import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InhouseService } from '../inhouse.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css'],
})
export class RegistrationformComponent implements OnInit {
  public hide = false;

  loginForm!: FormGroup;
  constructor(private service: InhouseService, private _router: Router) {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'),
      ]),

      password: new FormControl('', [
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
    if (this.loginForm.value) {
      if (
        this.loginForm.value.password === this.loginForm.value.confirmpassword
      ) {
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.confirmpassword;
        let name = this.loginForm.value.name;

        this.service
          .update({ name, email, password })
          .subscribe((data: any) => {
            console.log(data.message);
            this._router.navigate(['']);
          });
      }
    }
  }
}
