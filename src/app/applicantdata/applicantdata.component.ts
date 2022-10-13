import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicantdata',
  templateUrl: './applicantdata.component.html',
  styleUrls: ['./applicantdata.component.css']
})
export class ApplicantdataComponent implements OnInit {

  constructor() { }
  searchText!: string;
  filters!: Object;
  ngOnInit(): void {
  }

}
