import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  loader:boolean=false
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    setTimeout(() => {
      this.loader=true
    }, 1000);
  }
 @Input() title = 'In-House-Project';
}
