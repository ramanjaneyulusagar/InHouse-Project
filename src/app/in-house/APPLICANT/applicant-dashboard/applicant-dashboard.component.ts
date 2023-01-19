import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.css']
})
export class ApplicantDashboardComponent {
// drawer:boolean=true;
public drawer!:MatDrawer;

  toggled(){
    this.drawer.toggle();
  }
}
