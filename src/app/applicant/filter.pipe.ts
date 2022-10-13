import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 
  transform(items: any[], value: string): any[] {
    if (!items) return [];
    if (!value) return items;

    return items.filter(singleItem =>
        singleItem['name'].toLowerCase().includes(value.toLowerCase())
    );

}

   
 }

// transform(posts: any[], searchItem: string = ''): any {
//   return posts.filter(x=> x.toLowerCase().indexOf(searchItem.toLowerCase()) > -1);
// }
// transform(value: any[], d?: any,a?:any):any {
//   if(!value) return null;
//   if(!d) return value
//   d=d.toLowerCase();
//   debugger;
//   return value.filter(function(item:any){
//    return JSON.stringify(item).toLocaleLowerCase().includes(d);
//   });
// }
