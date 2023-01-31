import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import * as json2csv from 'json2csv';
import { UploadfileService } from '../../SERVICES/uploadfile.service';
@Component({
  selector: 'app-file-upload-dashboard',
  templateUrl: './file-upload-dashboard.component.html',
  styleUrls: ['./file-upload-dashboard.component.css'],
})
export class FileUploadDashboardComponent {
  selectedFiles!: FileList;
  progressInfos: any = [];
  message = '';
  @ViewChild('fileName') fileName!: ElementRef;
  fileInfos!: Observable<any>;
  previousValue:any;
  constructor(

    private _snackBar: MatSnackBar, private uploadfileservice: UploadfileService
  ) { }
  ngOnInit(): void {
    this.fileInfos = this.uploadfileservice.getFiles();
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    // this.previousValue =this.selectFiles(Event)

  }

  cancelSelectedFile() {
    this.fileName.nativeElement.value = '';
  }

 selectFiles(event: any) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    console.log(
      event,
      this.fileName.nativeElement.value,
      event,
      this.selectedFiles
    );
    if (this.fileName.nativeElement.value) {
      this._snackBar.open(
        ' file selected Successfully, click on upload!',
        '',
        {
          duration: 2000,
        }
      );

    }

    // { target: { files: FileList; }; }

  }
  uploadFiles() {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
      console.log(i);
    }
    console.log(this.selectFiles);
  }
  upload(idx: any, file: any) {
    console.log(file);
    let ext = file.name.split('.').pop();
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (ext == 'pdf' || ext == 'docx' || ext == 'doc') {
      this.uploadfileservice.upload(file).subscribe(
        (event: any) => {
          console.log(JSON.stringify(event));
          this.fileName.nativeElement.value = '';
          // this.progressInfos.fileName=null;
          // this.progressInfos.value=null
          this.progressInfos = [];
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            this.fileInfos = this.uploadfileservice.getFiles();
          }
        },
        (err) => {
          this.progressInfos[idx].value = 0;
          this.message = 'Could not upload the file:' + file.name;
          setTimeout(() => {
            this.message = '';
            this.fileName.nativeElement.value = '';
            this.progressInfos = [];
          }, 3000);
        }
      );
    } else {
      alert('choose different file format');
    }
    // idx.value='';
    // file.value='';

    // this.selectFiles.value=[0]   // this.selectFiles.
  }

  myFelds = [
    { alias: 'id' },
    { alias: 'name' },
    { alias: 'email' },
    { alias: 'education' },
    { alias: 'educationdetails' },
    { alias: 'skills' },
  ];
  exportToCsv() {
    /* get the data from the JSON object */
    let jsonData = [
      {
        name: 'John Doe',
        age: 25,
        gender: 'male',
      },
      {
        name: 'Jane Smith',
        age: 32,
        gender: 'female',
      },
    ];

    /* convert the JSON data to CSV */
    // let csv = json2csv.parse(jsonData);
    let fields = [{
      label: "id",
      value: "id"
    }, {
      label: "name",
      value: "name"
    }, {
      label: "email",
      value: "email"
    },
    {
      label: "education",
      value: "education"
    },
    {
      label: "educationdetails",
      value: "educationdetails"
    },
    {
      label: "skills",
      value: "skills"
    }];
    let options = { fields, header: true };

    let csv = json2csv.parse(jsonData, options);

    /* create a new Blob object with the CSV data */
    let blob = new Blob([csv], { type: 'text/csv' });

    /* create a link element to download the CSV file */
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.csv';

    /* trigger the download */
    link.click();
  }
}
// pipe(catchError((res:any)=> of(res)))
