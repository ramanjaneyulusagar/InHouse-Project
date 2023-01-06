import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.css']
})
export class UserProfileDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
edu:any;
  ngOnInit(): void {
    console.log(this.data);
this.edu=JSON.parse(JSON.stringify( this.data.details.EDUCATIONDETAILS))

  }

}
