import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InhouseService } from '../inhouse.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

  constructor(private route:Router, private service:InhouseService) { }

  ngOnInit(): void {
    this.getData();
  }
refresh(){
  window.location.reload()
}

logout(){
  this.service.logout();
  this.route.navigate(['login'])
}
profile:any
getData() {
  debugger;
  this.service.user1().subscribe((data) => {
    this.profile =data
    console.log(this.profile)
  
  })
}

}
