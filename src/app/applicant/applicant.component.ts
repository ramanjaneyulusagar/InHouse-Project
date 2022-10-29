import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { InhouseService } from '../inhouse.service';
import { IUsers } from '../users';
import { ngxCsv } from 'ngx-csv';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import autoTable from 'jspdf-autotable';
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
  // afuConfig = {
  //   formatsAllowed: ".jpg,.png,.pdf",
  //   uploadAPI: {
  //     url: "https://8aa2-115-117-172-107.in.ngrok.io/app/uploadFile"
  //   },
  //   multiple: false,
  //   fileNameIndex: false,
  // };
  // DocUpload(event: any) {
  //   console.log(event);

  // }
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
    Headers: [

      "id", "DOB", "eduation", "educationdetails", "email", "mobile", "name", "skills"
    ]

  };
  ngOnInit(): void {
    this.searchData();
    //console.log(this.d['name']);
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  formdata = {
    SKILLS: '',
    EDUCATION: ''
  }

  searchData() {

    // this.service.user({ SKILLS: '', EDUCATION: '' }).subscribe((data: any) => {
    //   console.log(data)
      // this.exportdata = data['content'];
    //})
  }

// search data using dropdown
  search(data: any) {
    this.hide = true
    console.log(data)
    this.service.user(this.formdata).subscribe((data: any) => {
      console.log(data)
      this.exportdata = data['content'];
      this.totalItems = data;
    })
  }
  //ecport the data into csv format
  exportXl() {
    console.log(this.exportdata)
    let exportView = this.exportdata.flatMap((e: any) => ({ id: e.id, ...e.details }));
    console.log(exportView)

    new ngxCsv(exportView, 'demo', this.options)
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
    //formData.set('name',this.file);
    formData.append('file', this.file)
    if (this.file) {
      console.log(this.file);
      this.http.post("https://2ff1-115-117-172-107.in.ngrok.io/app/uploadFile", formData).subscribe(data => console.log(data));
    }
  }
  // pdf() {
  //   const doc = new jsPDF();
  //   autoTable(doc, { html: '#table' });
  //   doc.save('table.pdf');
  // }

page:number=0;
  itemsPerPage!: number;
  totalItems!:number;
gty(page:any){
  this.page=this.page+1
  this.http.post(`https://2ff1-115-117-172-107.in.ngrok.io/app/search/${page=this.page}/10`,this.formdata
  ).subscribe((data:any)=>{
    //debugger;
    this.exportdata = data['content'];
   // this.page=page
  console.log(data)
  console.log(page);

  })
}
pagechange(){
  //this.itemsPerPage=1;
}
}
