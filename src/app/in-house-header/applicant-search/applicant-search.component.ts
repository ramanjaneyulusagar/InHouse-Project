import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv';
import { catchError } from 'rxjs';
import { apis } from 'src/app/apis';
import { InhouseService } from 'src/app/inhouse.service';
import { UserProfileDialogComponent } from '../user-profile-dialog/user-profile-dialog.component';

@Component({
  selector: 'app-applicant-search',
  templateUrl: './applicant-search.component.html',
  styleUrls: ['./applicant-search.component.css'],
})
export class ApplicantSearchComponent implements OnInit {
  @Input() groupFilters!: Object;
  @Input() searchByKeyword!: string;
  page: number = 1;
  itemsPerPage!: number;
  totalItems!: number;

  constructor(
    private route: Router,
    private dialog: MatDialog,
    private service: InhouseService,
    private fb: FormBuilder,
    private ref: ChangeDetectorRef,
    private http: HttpClient
  ) {}
  form!: FormGroup;
  public file: any = File;
  public data: any;
  public hide = false;
  public exportdata: any;
  public options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: false,
    headers: ['id', 'NAME', 'EMAIL', 'EDUCATION', 'EDUCATIONDETAILS', 'SKILLS'],
  };
  ngOnInit(): void {
    console.log('server data found');
  }
  increase = 0;
  openDialog() {
    const dialogRef = this.dialog.open(UserProfileDialogComponent, this.data);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  formdata = {
    SKILLS: '',
    EDUCATION: '',
  };
  numberOfElements: any;
  dataNumber: any;
  exceldata: any;
  datasize: any;

  // search data using dropdown
  search(data: any) {

    console.log(data);
    this.service.user(this.formdata).subscribe((data: any) => {
      console.log(data);
      if (data !== null) this.hide = true;
      // this.loader=false
      this.exportdata = data['content'];
      this.dataNumber = data.totalRows;
      this.datasize = data.size;
      this.numberOfElements = data.numberOfElements;
      let id: any;

      this.exceldata = this.exportdata.map((a: any) => {
        console.log(a['details']);
      });
      console.log(id);

      this.formdata.SKILLS = '';
      this.formdata.EDUCATION = '';
    });
    (Error: HttpErrorResponse) => {
      alert('no data found' + Error);
    };

  }

  //ecport the data into csv format
  exportXl() {
    console.log(this.exportdata);
    let id;
    let name: [];
    let email: [];
    let education;
    let educationdetails;
    let skills;
    // this.exceldata = this.exportdata.map((a: any) => {
    //   // id:a.id;name:a.details
    //   id = a['id'];
    //   name = a['details']['NAME'];
    //   email = a['details']['EMAIL'];
    //   education = a['details']['EDUCATION'];
    //   educationdetails = a['details']['EDUCATIONDETAILS'];
    //   skills = a['details']['SKILLS'];
    //   console.log(id);
    //   console.log(a['details']['EDUCATION']);
    //   console.log(a['details']['SKILLS']);
    //   console.log(a['details']['EDUCATIONDETAILS']);
    //   console.log(a['details']['EMAIL']);
    //   console.log(a['details']['EMAIL']);
    //   console.log(id);
    //   let data = [];
    //   data.push(id, name, email, education, educationdetails, skills);

    // });
    new ngxCsv(this.exceldata, 'demo', this.options);
  }
  viewdetails(data: any) {
    const dialogRef = this.dialog.open(UserProfileDialogComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //ufile upload function
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  //submit file to the api url
  onUpload() {
    let formData = new FormData();
    formData.append('file', this.file);
    if (this.file) {
      console.log(this.file);
      this.http.post(apis.UPLOADFILE(), formData).subscribe((data: any) => {
        console.log(data);
      });
    }
  }

  paginated(page: any) {
    // debugger
    // window.location.reload();
    this.page = page;
    this.http
      .post(`http://localhost:8080/app/search/${this.page}/10`, this.formdata)
      .pipe(
        catchError(async (err: any) =>
          alert('no data found' + JSON.stringify(err) + this.paginated(1))
        )
      )
      .subscribe((d: any) => {
        // debugger
        if (d) {
          this.exportdata = d['content'];
          this.numberOfElements = d.numberOfElements;
          this.itemsPerPage = 10;
          this.totalItems = d.totalElements;
          console.log(this.page);
        } else {
          page--;
        }
      });
  }
}
