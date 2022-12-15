import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  @Input() page: string = '';
}
