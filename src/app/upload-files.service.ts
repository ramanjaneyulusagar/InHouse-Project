import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apis } from './apis';

@Injectable({
  providedIn: 'root',
})
export class UploadFilesService {
  constructor(private http: HttpClient) {}
  // private baseUrl = 'http://localhost:8080';
  upload(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(apis.UPLOADFILE(), formData, {
      responseType: 'text',
    });
    // const req = new HttpRequest('POST', apis.UPLOADFILE(), formData, {
    //   // reportProgress: true,
    //   responseType: 'json',
    // });
  }
  getFiles(): Observable<any> {
    let file: any;
    const formData: FormData = new FormData();

    formData.append('file', file);
    return this.http.post(apis.UPLOADFILE(), formData);
  }
}
