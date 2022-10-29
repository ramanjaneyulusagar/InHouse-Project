import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value?: any, d?: any):any {
    if(!value) return null;
    if(!d) return value
    d=d.toLowerCase();
    //debugger;
    return value.filter(function(item:any){
     return JSON.stringify(item).toLocaleLowerCase().includes(d);
    });
  }


   
 }



