import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { InhouseService } from '../inhouse.service';
import { ngxCsv } from 'ngx-csv';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import autoTable from 'jspdf-autotable';
import { map } from 'rxjs';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { stringifier } from 'csv/.';
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  p: number = 1
  total: number = 0
  @Input() groupFilters!: Object;
  @Input() searchByKeyword!: string;
  filteredUsers: any[] = [];
  users: any[] = [];
  country: any;
  sector: any;
  constructor(private route: Router,
    private dialog: MatDialog, private service: InhouseService,
    private fb: FormBuilder, private ref: ChangeDetectorRef, private http: HttpClient) { }
  form!: FormGroup;
  public file: any = File;
  public data: any;
  public hide = false;
  public exportdata: any
  public options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: false,
    headers: [
      "id", "NAME", "DOB", "EMAIL", "MOBILE", "EDUCATION", "EDUCATIONDETAILS", "SKILLS"
    ]
  };
  ngOnInit(): void {

  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, this.data);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  formdata = {
    SKILLS: '',
    EDUCATION: ''
  }
  numberOfElements: any;
  exceldata: any
  // search data using dropdown
  search(data: any) {
    this.hide = true
    console.log(data)
    this.service.user(this.formdata).subscribe((data: any) => {
      console.log(data)

      this.exportdata = data['content'];
      this.numberOfElements = data.numberOfElements
      this.exceldata = this.exportdata.sort((a: any) => {

      })
      console.log(this.exceldata)

    })
  }

  //ecport the data into csv format
  exportXl() {
    console.log(this.exportdata)

    let exportView = this.exportdata.flatMap((e: any) => ({ id: e.id, ...e.details }));
    console.log(exportView)
    let tempData = this.exportdata;
    for (let i = 0; i < tempData.length; i++) {
      //console.log(tempData[i]["details"]["SKILLS"])
      tempData[i]["details"]["SKILLS"] = this.arrayToString(tempData[i]["details"]["SKILLS"]);
      //console.log(tempData[i]["details"]["SKILLS"])
    }
    //tempData["SKILLS"] = this.arrayToString(tempData["SKILLS"])
    console.log(tempData)
    new ngxCsv(exportView, 'demo', this.options)
  }

  arrayToString(data: any) {
    let result: string = "";
    for (let i = 0; i < data.length; i++) {
      result = result.concat(data[i] + ",");
    }
    result = result.substring(0, result.length - 1)
    //console.log(result)
    return result;
  }
  viewdetails(data: any) {
    const dialogRef = this.dialog.open(DialogComponent, { data });
    dialogRef.afterClosed().subscribe(result => {
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
    formData.append('file', this.file)
    if (this.file) {
      console.log(this.file);
      this.http.post("https://7889-115-117-172-107.in.ngrok.io/app/uploadFile", formData).subscribe(data => console.log(data));
    }
  }
  pdf() {
    const doc = new jsPDF();
    autoTable(doc, { html: '#table' });
    doc.save('table.pdf');
    //<button (click)="pdf()" class="btn btn-primary" *ngIf="hide">pdf</button> 
  }
  page: number = 1;
  itemsPerPage!: number;
  totalItems!: number;
  next() {
    this.page = this.page + 1
    this.http.post(`https://7889-115-117-172-107.in.ngrok.io/app/search/${this.page}/10`, this.formdata
    ).subscribe((data: any) => {
      //debugger;
      this.exportdata = data['content'];
      this.numberOfElements = data.numberOfElements

    })
  }
  prev() {
    this.page = this.page - 1
    this.http.post(`https://7889-115-117-172-107.in.ngrok.io/app/search/${this.page}/10`, this.formdata
    ).subscribe((data: any) => {
      //debugger;
      this.exportdata = data['content'];
      this.numberOfElements = data.numberOfElements

    })
  }

}
