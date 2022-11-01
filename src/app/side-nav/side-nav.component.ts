import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'
import { Router } from '@angular/router';
import { InhouseService } from '../inhouse.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav

  constructor(private observer: BreakpointObserver, private service: InhouseService,
    private router: Router, private http: HttpClient) { }
  afuConfig = {
    formatsAllowed: ".jpg,.png,.pdf",
    uploadAPI: {
      url: "https://5f82-115-117-172-107.in.ngrok.io/app/uploadFile"
    },
    multiple: false,
    fileNameIndex: false,
  };
  DocUpload(event: any) {
    console.log(event);

  }

  //Sidenav function...
  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }

    });
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('admin');
    // this.service.logout();
    this.router.navigate([''])
  }
  hide: any
  file: any = File;
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    let formData = new FormData();
    formData.append('file', this.file)
    if (this.file) {
      console.log(this.file);
      this.http.post("https://5f82-115-117-172-107.in.ngrok.io/app/uploadFile", formData).subscribe((data: any) => console.log(data));
      alert('file is uploaded');
    }
  }
}
