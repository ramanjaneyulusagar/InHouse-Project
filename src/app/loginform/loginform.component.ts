import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth:LoginService

  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {

  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      if (this.loginForm.value.email != '' && this.loginForm.value.password != '') {
        if (this.auth.login(this.loginForm.value.email,this.loginForm.value.password)){
          this.router.navigate(['/dashboard'])
        }
        else{
          alert('wrong pasword')
        }
      }


      console.log(this._v());
    }
  }
  _v() {
    return this.loginForm.value;
  }

}
