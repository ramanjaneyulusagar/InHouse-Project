import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InhouseService } from '../inhouse.service';
import {FormsModule,NgForm} from '@angular/forms';
interface loginform {
email:string,password:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erroremail : string | undefined;

 
  form:loginform={
    email: '',
    password: '',
    
  }
  constructor(private _router:Router,private service:InhouseService) { }

  ngOnInit(): void {
   
  }

   login(data:any){
    if(this.form.email!='' &&this.form.password!='')
    {
      if(this.service.login(this.form.email,this.form.password)){
   
        this._router.navigate(['dashboard'])
      }
      else{
        alert("Enter valid Details")
      }
     //
    }
   
}
  
}
