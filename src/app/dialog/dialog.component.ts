import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from 'popper.js';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
edu:any;
  ngOnInit(): void {
    console.log(this.data);
this.edu=JSON.parse(JSON.stringify( this.data.details.EDUCATIONDETAILS))

  }


}
