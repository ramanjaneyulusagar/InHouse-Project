import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InhouseService } from '../inhouse.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: LoginService,
    private service: InhouseService
  ) {
    this.loginForm = new FormGroup({
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
    });
  }

  ngOnInit(): void {}
  public error: any;

  onSubmit() {
    if (this.loginForm.valid) {
      let obj = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.service.logincheck(obj).subscribe(
        (data: any) => {
          console.log(data);
          if (data) {
            localStorage.setItem('admin', 'loggedin');
            this.router.navigate(['/dashboard']);
          } else {
            this.error = data.message;
          }
        },
        (err: any) => {
          alert('Invalid Credentials');
        }
      );
    }
  }

  public hide = true;
  // get passwordInput() { return this.loginForm.get('password'); }

  public get logedin(): boolean {
    return localStorage.getItem('admin') !== null;
  }
}
