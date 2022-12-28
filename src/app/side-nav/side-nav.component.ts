import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { InhouseService } from '../inhouse.service';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { apis } from '../apis';
import { time } from 'console';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  uploadedFiles: File[] = [];
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private service: InhouseService,
    private router: Router,
    private http: HttpClient
  ) {}

  DocUpload(event: any) {
    console.log(event);
  }
  OnUpload(event: any) {
    console.log(event);
    for (let file of event.target.files[0]) {
      this.uploadedFiles.push(file);
    }
    //let ds=this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    console.log(event);
  }
  //Sidenav function...
  ngAfterViewInit() {
    this.observer.observe(['(max-width:400px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngOnInit(): void {
    // this.OnUpload('hello  ');
  }

  logout() {
    localStorage.removeItem('admin');
    // this.service.logout();
    this.router.navigate(['']);
  }
  hide: any;
  file: any = File;
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    let ext =this.file.name.split('.').pop();
    let formData = new FormData();
    formData.append('file', this.file);
    if (ext=='pdf'||ext=='docx'||ext=='doc') {

      console.log(this.file);
      this.http
        .post(apis.UPLOADFILE(), formData,{responseType: 'text'})
        .subscribe((data: any) => console.log(JSON.stringify(data),alert(data)

        )
      // formData.reset()
      );

      // console.log
      }

    else{
      alert('invalid file format, upload pdf,doc ,docx only ')
    }
  }
}
// var ext = event.target.files[j].name.split('.').pop();
// if(ext=="pdf" || ext=="docx" || ext=="doc"|| ext=="ppt"|| ext=="pptx"){

// } else{
//   iscorrectfileattached=false;
// }
