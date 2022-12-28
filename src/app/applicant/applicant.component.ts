import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import { ngxCsv } from 'ngx-csv';
import { DialogComponent } from '../dialog/dialog.component';
import { InhouseService } from '../inhouse.service';
// import { NgxCsvService } from 'ngx-csv';
// import { CsvFormat } from '@angular/common';
import { saveAs } from 'file-saver';
import { catchError } from 'rxjs';
import { animate } from '@angular/animations';
import { apis } from '../apis';
export interface exd {
  id: [];
  name: [];
  email: [];
  education: [];
  eduactiondetails: [];
  skills: [];
}
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css'],
})
export class ApplicantComponent implements OnInit {
  p: number = 1;
  total: number = 0;
  url = apis.url;
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
  ngOnInit(): void {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, this.data);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  formdata = {
    SKILLS: '',
    EDUCATION: '',
  };
  numberOfElements: any;
  exceldata: any;
  // search data using dropdown
  search(data: any) {
    console.log(data);
    this.service.user(this.formdata).subscribe((data: any) => {
      console.log(data);
      if (data !== null) this.hide = true;
      this.exportdata = data['content'];

      this.numberOfElements = data.numberOfElements;

      let id = this.exportdata.map((a: any) => {
        console.log();
      });
      // console.log(a.id);
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
    this.exceldata = this.exportdata.map((a: any) => {
      // id:a.id;name:a.details
      id = a['id'];
      name = a['details']['NAME'];
      email = a['details']['EMAIL'];
      education = a['details']['EDUCATION'];
      educationdetails = a['details']['EDUCATIONDETAILS'];
      skills = a['details']['SKILLS'];
      console.log(id);
      console.log(a['details']['EDUCATION']);
      console.log(a['details']['SKILLS']);
      console.log(a['details']['EDUCATIONDETAILS']);
      console.log(a['details']['EMAIL']);
      console.log(a['details']['EMAIL']);
      console.log(id);
      let data = [];
      data.push(id, name, email, education, educationdetails, skills);
      new ngxCsv(data, 'demo', this.options);
    });
  }
  viewdetails(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, { data });
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
  pageCount: number = 1;
  pageCountPrevious: boolean = true;
  pageCountNext: boolean = false;
  nextPage() {
    if (this.pageCount === 1) this.pageCountPrevious = false;
    this.pageCount++;
    this.http
      .post(
        `http://localhost:8080/app/search/${this.pageCount}/10`,
        this.formdata
      )
      .pipe(
        catchError(async (err: any) =>
          alert('no data found' + JSON.stringify(err) + this.pageCount--)
        )
      )
      .subscribe(
        (data: any) => {
          // this.exportdata=data['content'];
          if (data !== null) {
            this.exportdata = data['content'];
            this.numberOfElements = data.numberOfElements;
          } else {
            alert('no data from server');
            console.log(this.pageCount);
          }
        },
        (err: any) => {
          alert(err);
        }
      );
  }
  previousPage() {
    if (this.pageCount === 2) {
      this.pageCountPrevious = true;
    } else {
      this.pageCountPrevious = false;
    }
    this.pageCount--;
    let page = this.pageCount;
    console.log(this.pageCount, page);
    this.http
      .post(
        `http://localhost:8080/app/search/${this.pageCount}/10`,
        this.formdata
      )
      .pipe(catchError(async (err) => alert(this.pageCount)))
      .subscribe((data: any) => {
        //debugger;
        if (data) {
          this.exportdata = data['content'];
          this.numberOfElements = data.numberOfElements;
        } else {
          // alert('no data from server');
        }
      });
    (Error: HttpErrorResponse) => {
      alert(Error);
    };
  }
}
// pdf() {
//   const doc = new jsPDF();
//   autoTable(doc, { html: '#table' });
//   doc.save('table.pdf');
//   //<button (click)="pdf()" class="btn btn-primary" *ngIf="hide">pdf</button>
// }
// let name=this.exportdata.map((e:any)=>{
//   e['details'].NAME
// });
// let email=this.exportdata.map((e:any)=>{
//   e['details'].EMAIL
// });
// let education=this.exportdata.map((e:any)=>{
//   e['details']['EDUCATION']
// });
// let educationdetails=this.exportdata.map((e:any)=>{
//   e['details']['EDUCATIONDETAILS']
// });
// let skills=this.exportdata.map((e:any)=>{
//   e['details']['SKILLLS']
// });
// exportCsv() {
//   const formattedData = this.data.map((dataItem: any) => {
//     return {
//       Name: dataItem.name,
//       Age: dataItem.age,
//       City: dataItem.city,
//     };
//   });

//   const d = CsvFormat.format(formattedData);
//   const blob = new Blob([d], { type: 'text/csv' });
//   saveAs(blob, 'data.csv');
// }
// let d:exd[]=[];
// this.exportdata.map((a:any)=>{
//   const id =a['id'];
//     const name= a['details']['NAME'];
//      const email =a['details']['EMAIL']
//    const education =a['details']['EDUCATION']
//     const educationdetails=a['details']['EDUCATIONDETAILS']
//     const  skills =a['details']['SKILLS']

//       d.push(id,name,email,education,educationdetails,skills)
// })
// d.push(csv);
// arrayToString(data: any) {
//   let result: string = '';
//   for (let i = 0; i < data.length; i++) {
//     result = result.concat(data[i] + ',');
//   }
//   result = result.substring(0, result.length - 1);
//   //console.log(result)
//   return result;
// }

// console.log(exp);

//
// });

// let exportView = this.exportdata.flatMap((e: any) => ({
//   id: e.id,
//   ...e.details,
// }));
// console.log(exportView);
// let tempData = this.exportdata;
// for (let i = 0; i < tempData.length; i++) {
//   //console.log(tempData[i]["details"]["SKILLS"])
//   tempData[i]['details']['SKILLS'] = this.arrayToString(
//     tempData[i]['details']['SKILLS']
//   );
//   console.log(tempData[i]["details"]["SKILLS"])
// }
//tempData["SKILLS"] = this.arrayToString(tempData["SKILLS"])
// console.log(tempData);
// let id = this.exportdata.map((e: any) => {
//   e['details'].id
// });
// console.log(id, "id");
//
