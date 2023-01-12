import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UploadFilesService } from 'src/app/upload-files.service';

@Component({
  selector: 'app-file-upload-dashboard',
  templateUrl: './file-upload-dashboard.component.html',
  styleUrls: ['./file-upload-dashboard.component.css']
})
export class FileUploadDashboardComponent {

  selectedFiles!: FileList;
  progressInfos: any = [];
  message = '';
  @ViewChild('fileName') fileName!: ElementRef;
  fileInfos!: Observable<any>;
  constructor(private service: UploadFilesService,private _snackBar: MatSnackBar,) {}
  ngOnInit(): void {
    this.fileInfos = this.service.getFiles();
    // throw new Error('Method not implemented.');
  }
  cancelSelectedFile(){
    this.fileName.nativeElement.value='';
  }
  selectFiles(event: any) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    console.log(event,this.fileName.nativeElement.value,event,this.selectedFiles)
    this._snackBar.open(" file selected Successfully, click on upload!", 'Close', {
      duration: 2000,
    });
    // { target: { files: FileList; }; }
  }
  uploadFiles() {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
      console.log(i)
    }
    console.log(this.selectFiles);

  }
  upload(idx: any, file: any) {
    let ext = file.name.split('.').pop();
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (ext == 'pdf' || ext == 'docx' || ext == 'doc') {
      this.service.upload(file).subscribe(
        (event: any) => {
          console.log(JSON.stringify(event), alert(event));
          this.fileName.nativeElement.value = '';
          // this.progressInfos.fileName=null;
          // this.progressInfos.value=null
          this.progressInfos = [];
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            this.fileInfos = this.service.getFiles();
          }
        },
        (err) => {
          this.progressInfos[idx].value = 0;
          this.message = 'Could not upload the file:' + file.name;
        }
      );
    } else {
      alert('choose different file format');
    }
    // idx.value='';
    // file.value='';

    // this.selectFiles.value=[0]   // this.selectFiles.
  }
}
