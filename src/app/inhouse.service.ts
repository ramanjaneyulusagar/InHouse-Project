import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
interface loginform {
  email:string,password:string
  }
@Injectable({
  providedIn: 'root'
})
export class InhouseService {

  constructor(private http:HttpClient) { }
  login(email:string,password:string){   
    if(email=='admin' && password=='123')
    {
      localStorage.setItem('user','log');
      return true
    }
    return false
     //return this.http.post<loginform>("http://localhost3000/login",data)
  
  }
  logout(){
    localStorage.removeItem('user');
  }
  public get log():boolean{
    return (localStorage.getItem('user')!==null)
  }
  jsondata(){
    return this.http.get<loginform>("http://localhost3000/login")
  }
}
