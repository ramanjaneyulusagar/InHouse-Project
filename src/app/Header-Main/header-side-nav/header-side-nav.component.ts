import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InhouseService } from 'src/app/inhouse.service';
import { MatSidenav } from '@angular/material/sidenav'
@Component({
  selector: 'app-header-side-nav',
  templateUrl: './header-side-nav.component.html',
  styleUrls: ['./header-side-nav.component.css'],
})
export class HeaderSideNavComponent implements OnInit {
  file: any = File;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(
    private observer: BreakpointObserver,
    private service: InhouseService,
    private router: Router,
    private http: HttpClient
  ) {}

  onChange(event: any) {
    this.file = event.target.files[0];
  }
  onUpload() {
    let formData = new FormData();
    formData.append('file', this.file);
    if (this.file) {
      console.log(this.file);
      this.http
        .post(
          'https://7889-115-117-172-107.in.ngrok.io/app/uploadFile',
          formData
        )
        .subscribe((data: any) => console.log(data));
      alert('file is uploaded');
    }
  }
}
