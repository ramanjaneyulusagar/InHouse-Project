import { ApplicationRef, Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InhouseService } from '../inhouse.service';
import { IUsers } from '../users';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-alldetails',
  templateUrl: './alldetails.component.html',
  styleUrls: ['./alldetails.component.css']
})
export class AlldetailsComponent implements OnInit {
 
  country = '';
  sector = '';
  group = '';
  
  filterList = {
    Name : ['Ali'],
    Email: ['xyz@gmail.com', 'Agriculture', 'Medical'],
    Qualification : ['India', 'USA', 'Japan', 'Australia'],
    Experience: ['IT', 'Agriculture', 'Medical'],
    Skills: ['Java', 'Angular', 'SQL']
    //here you can add as many filters as you want.
    };
  data: any;
  constructor(private readonly dialog: MatDialog) { }

  
  
  ngOnInit(): void {
     
  }

  filterChange(_appliedfilters: any) {
    this.country = _appliedfilters._appliedFiltersValues.country;
    this.sector = _appliedfilters._appliedFiltersValues.sector;
  }

  
 
  
 
}
