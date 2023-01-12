import { Component, Input, OnInit } from '@angular/core';
// import * as pdf2json from 'pdf2json';
// import * as pdfjsLib from 'pdfjs-dist';
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
    // const fileReader = new FileReader();
    // fileReader.onload = (e:any) => {
    //   const binary = new Uint8Array(fileReader.result as ArrayBuffer);
    //   const decoder = new TextDecoder();
    //   this.fileContent = decoder.decode(binary);
    //   console.log(e)
    // };

    // fileReader.readAsArrayBuffer(file);

    // fileReader.onload = (e) => {
    //   this.fileContent = new Uint8Array(fileReader.result as ArrayBuffer);
    // };

    // fileReader.readAsArrayBuffer(file);
    // fileReader.onload = (e) => {
    //   this.fileContent = fileReader.result as string;
    // };

    // fileReader.readAsText(file);


}
