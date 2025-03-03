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
  public selectedFiles: File[] = [];
  public progressInfos: any[] = [];
  public message = '';
  public fileSelected: boolean = false;
  @ViewChild('fileName') fileName!: ElementRef;
  public fileInfos!: Observable<any>;
  public previousValue: string = '';
  files: any;
  constructor(
    private _snackBar: MatSnackBar,
    private uploadfileservice: UploadfileService
  ) { }
  ngOnInit(): void {
    // this.fileInfos = this.uploadfileservice.getFiles();
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    // this.previousValue =this.selectFiles(Event)
  }
  chooseFileButton() {
    this.fileName.nativeElement.click();
  }
  cancelTotalFiles() {
    this.selectedFiles = [];
    this.fileSelected = false;
  }
  cancelSelectedFile(index: any) {
    if (this.selectedFiles.length === 1) this.fileSelected = false;
    this._snackBar.open(
      `${this.selectedFiles[index]['name']} is removed  from the list`,
      'close',
      { duration: 10000 }
    );
    this.selectedFiles.splice(index, 1);

  }
  selectFiles(event: any) {
    this.fileSelected = true;

    this.progressInfos = [];
    if (this.fileName.nativeElement.value !== null) {
      this.selectedFiles = [...event.target.files];
      console.log(
        event,
        this.fileName.nativeElement.value,
        event,
        this.selectedFiles
      );
    } else {
      this.fileSelected = false;
      // var d = this.selectedFiles;
      this.progressInfos = [];
      this.selectedFiles = this.selectedFiles;;
      console.log(
        event,
        this.fileName.nativeElement.value,
        event,
        this.selectedFiles
      );
    }
    if (this.fileName.nativeElement.value) {
      this._snackBar.open(
        ' file selected Successfully, click on upload!',
        '',
        { duration: 6000 }
      );
    }
  }
  uploadFiles() {
    this.message = '';
    let filesData: any = [];
    this.selectedFiles.map((key: any) => {
      filesData.push(key);

    })
    console.log(filesData);
    filesData ? this.upload(filesData) : '';

    // filesData? this.upload(filesData)
    // var i:any
    // var files
    // for (i= 0; i < this.selectedFiles.length; i++) {


    //   console.log(i);
    // };
  }
  upload(file: any) {
    //     var f=file;
    //     var i:any
    // for(i=0;i<=f.length;i++){
    //   console.log(f[i]['name']);
    // }
    // let ext = file.name.split('.').pop();

    console.log(this.progressInfos)
    if (file.length > 0) {
      this.uploadfileservice.upload(file).subscribe(
        (event: any) => {
          console.log(JSON.stringify(event));
          // this.fileName.nativeElement.value = '';
          // this.progressInfos = [];

        },
        (err) => {
          // debugger
          // this.progressInfos[idx].value = 0;
          this.message = 'Could not upload the files';
          console.log(this.message)
          // alert(this.message);
          setTimeout(() => {
            this.message = '';
            this.fileName.nativeElement.value = '';
            this.progressInfos = [];
            this.selectedFiles = [];
            this.cancelTotalFiles();
          }, 3000);
        }
      );

    }
    else {
      alert('choose different file format');
      this.selectedFiles = []
    }
  }
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
    let fields = [
      {
        label: 'id',
        value: 'id',
      },
      {
        label: 'name',
        value: 'name',
      },
      {
        label: 'email',
        value: 'email',
      },
      {
        label: 'education',
        value: 'education',
      },
      {
        label: 'educationdetails',
        value: 'educationdetails',
      },
      {
        label: 'skills',
        value: 'skills',
      },
    ];
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
// (err) => {
//   debugger
//   // this.progressInfos[idx].value = 0;
//   this.message = 'Could not upload the files';
//   console.log(this.message)
//   alert(this.message);
//   setTimeout(() => {
//     this.message = '';
//     this.fileName.nativeElement.value = '';
//     this.progressInfos = [];
//     this.selectedFiles = [];
//   }, 3000);
// }
// if (event.type === HttpEventType.UploadProgress) {
//   this.progressInfos[idx].value = Math.round(
//     (100 * event.loaded) / event.total
//   );
//  }
//  else if (event instanceof HttpResponse) {
//   // this.fileInfos = this.uploadfileservice.getFiles();
// }
