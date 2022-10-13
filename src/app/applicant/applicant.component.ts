import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { InhouseService } from '../inhouse.service';
import { IUsers } from '../users';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  search = "";
  @Input() groupFilters!: Object;
  @Input() searchByKeyword!: string;
  filteredUsers: any[] = [];
  users: any[] = [];

  filterList = {
    Name: ['Ali', 'Ahmed', 'Peshawar', 'Peter'],
    Email: ['xyz@gmail.com', 'xyz@gmail.com', 'xyz@gmail.com'],
    Qualification: ['B.Tech', 'Degree'],
    Experience: ['Fresher', '1-2 years'],
    Skills: ['Java', 'Angular', 'SQL']
    //here you can add as many filters as you want.
  };

  country: any;
  sector: any;

  constructor(private route: Router,
     private dialog: MatDialog, private service: InhouseService,
     private fb: FormBuilder,private ref: ChangeDetectorRef) { }
  form!: FormGroup;
 
  
  ngOnInit(): void {
    this.getuserData()

  }

  go() {
    this.route.navigate(['dashboard'])
  }

  popup() {
    this.route.navigate(['/alldetails'])
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }

  filterChange(_appliedfilters: any) {
    this.country = _appliedfilters._appliedFiltersValues.country;
    this.sector = _appliedfilters._appliedFiltersValues.sector;
  }

  data: any

  getuserData() {
    this.service.user().subscribe((data) => {
      this.data = data
    })
  }

}
// 