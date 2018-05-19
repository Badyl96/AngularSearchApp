import { Pipe, PipeTransform } from '@angular/core';
import {SearchData} from './search-data'

@Pipe({
  name: 'sortData'
})
export class SortDataPipe implements PipeTransform {

  transform(value: SearchData[], filter: string): any {
    //sort data
    return this.sortByKey(value, filter);
  }
    
  sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
}
  

  

