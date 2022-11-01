import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InhouseService } from '../inhouse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myDate = Date.now();


  constructor(private service: InhouseService, private router: Router) { }

  ngOnInit(): void {
  }

  refresh() {
    window.location.reload()
  }
  logout() {
    this.service.logout();
    this.router.navigate(['login'])
  }
}
