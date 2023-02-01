import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  MinLengthValidator,
} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { InhouseService } from 'src/app/app.service';
import { InHouseService } from '../../SERVICES/in-house.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent {
  public hide = false;

  public loginForm!: FormGroup;
  constructor(private service: InHouseService, private _router: Router) {
    this.loginForm = new FormGroup({
      name: new FormControl(
        '',
        Validators.compose([
          Validators.minLength(4),
          Validators.required,
          Validators.pattern('[A-Za-z ]+'),
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required, Validators.email,
          // Validators.pattern(
          //   '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
          // ),
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ])
      ),

      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$'
          ),
        ])
      ),
      confirmpassword: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$'
          ),
        ])
      ),
    });
  }
  error_messages = {
    name: [{ type: 'required', message: 'First Name is required.' }],

    email: [
      { type: 'required', message: 'Email is required.' },
      // { type: 'minlength', message: 'Email length.' },
      // { type: 'maxlength', message: 'Email length.' },
      // { type: 'required', message: 'please enter a valid email address.' },
    ],

    password: [
      { type: 'required', message: 'password is required.' },
      // { type: 'minlength', message: 'password length.' },
      // { type: 'maxlength', message: 'password length.' }
      // { type: 'pattern', message: 'password is invalid' },
    ],
    confirmpassword: [
      { type: 'required', message: 'confirm password is required.' },
      // { type: 'minlength', message: 'password length.' },
      // { type: 'maxlength', message: 'password length.' }
      // {type:'pattern',message:'password is invalid'}
    ],
  };
  ngOnInit(): void { }
  alphaOnly(event: any) {
    return event;
  }
  onSubmit() {
    if (!this.loginForm.value) {
      return;
    }
    if (this.loginForm.value) {
      if (
        this.loginForm.value.password === this.loginForm.value.confirmpassword
      ) {
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.confirmpassword;
        let name = this.loginForm.value.name;

        this.service
          .update({ name, email, password })
          .pipe(
            catchError(async (err: any) => {
              alert('error');
            })
          )
          .subscribe((data: any) => {
            console.log(data.message);
            this._router.navigate(['']);
          });
      }
    }
  }
  get name() {
    return this.loginForm.value.name;
  }
  get email() {
    return this.loginForm.value.email;
  }
  get password() {
    return this.loginForm.value.password;
  }
  get confirmpassword() {
    return this.loginForm.value.confirmpassword;
  }
}
