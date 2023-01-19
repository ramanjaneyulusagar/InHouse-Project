import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { apis } from 'src/app/apis';
import * as XLSX from 'xlsx';
@Injectable({
  providedIn: 'root',
})
export class InHouseService {
  // isLoggedIn: boolean = false;
  constructor(private http: HttpClient) {
    // window.addEventListener('beforeunload', (event) => {
    //   localStorage.removeItem('token');
    // }
    // );
  }
  loggedIn() {
    let hasToken = false;
    if (localStorage.getItem('token') == 'passCode') {
      hasToken = true;
    }
    return hasToken;
  }
  getToken() {
    return localStorage.getItem('token');
  }
  // table data to xl sheet data
  @ViewChild('table') table!: ElementRef;
  exportToExcel() {
    /* get the data from the table */
    let data = this.table.nativeElement.value;
    /* create a new workbook */
    let wb = XLSX.utils.table_to_book(data);
    /* save the workbook as an excel file */
    XLSX.writeFile(wb, 'table.xlsx');
  }
  // <button (click)="exportToExcel()">Export to Excel</button>
  logout() {
    localStorage.removeItem('user');
  }
  public get log(): boolean {
    return localStorage.getItem('user') !== null;
  }
  user(data: any): Observable<any> {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    return this.http.post(apis.SEARCH(), data).pipe(
      catchError(async (err: any) => {
        alert(err);
      })
    );
  }
  logincheck(data: any) {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    return this.http.post(apis.LOGIN(), data, config).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  update(payload: any) {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    return this.http.post(apis.USERSAVE(), payload, config).pipe(
      map((data: any) => {
        console.log(data);
        if (data) {
          return true;
        } else {
          return false;
        }
      })
    );
    // return this.http.post(
    //   'https://7889-115-117-172-107.in.ngrok.io/app/usersave',
    //   payload
    // );
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
