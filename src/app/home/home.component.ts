import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InhouseService } from '../inhouse.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: InhouseService, private router: Router) { }

  ngOnInit(): void {
  }
  
  logout() {
    this.service.logout();
    this.router.navigate([''])
  }
}
