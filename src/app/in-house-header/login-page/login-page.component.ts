import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { InhouseService } from 'src/app/inhouse.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isValidFormSubmitted: any;
  loginCredentials!: Subscription;
  loginForm!: FormGroup;
  emailValid: string = '';
  passwordValid: string = '';
  userLogin: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: LoginService,
    private service: InhouseService,
    private activatedRoute: ActivatedRoute
  ) {
    this.loginForm = new FormGroup({
      ///^[a-zA-Z]+$/username
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,20}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$'
        ),
      ]),
    });
  }
  validLogin: any;
  ngOnInit(): void {
    this.validLogin = 'hello';
    this.userLogin = this.activatedRoute.snapshot.paramMap.get('title');
    this.activatedRoute.data.subscribe((value: any) => {
      this.userLogin = value.loginType ?? "User Login";
    })
  }
  public error: any;

  onSubmit() {
    this.isValidFormSubmitted = false;
    let obj = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    if (this.loginForm.invalid) {
      console.log(this.loginForm.value);
      return;
    } else {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);
        this.loginCredentials = this.service
          .logincheck(obj)
          .pipe(catchError((res) => of(res)))
          .subscribe((data: any) => {
            let cred = JSON.stringify(data);
            console.log(cred);
            let e = (error: any) => {
              console.log(error);
            };
            if (data.response) {
              localStorage.setItem('admin', 'loggedin');
              this.router.navigate(['/applicant-search']);
            }
            if (data.message) {
              console.log(data.error.message);
              alert(data.error.message);
              this.emailValid = data.error.message;
              this.loginForm.reset();
            }
          });
      } else {
        console.log('invalid data');
      }
    }
  }

  public hide = true;
  // get passwordInput() { return this.loginForm.get('password'); }
  public get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  public get loggedin(): boolean {
    return localStorage.getItem('admin') !== null;
  }

  EmailValue() {
    var emailLength = this.loginForm.controls['email'].value.length;
    console.log(emailLength);
  }
  ngOnDestroy() {
    // this.router.navigate([''])
    // this.loginCredentials.unsubscribe();
    // this.router.navigate([''])
  }
}
