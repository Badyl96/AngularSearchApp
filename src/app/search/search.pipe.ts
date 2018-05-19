import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeData } from '../employees';


@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: EmployeeData[], filter:EmployeeData): EmployeeData[] {
    //filter data
    if(!value || !filter){
      return value;
    }
    return value.filter((value: EmployeeData) => this.applyFilter(value, filter));
    
 
  }


applyFilter(book: EmployeeData, filter: EmployeeData): boolean {
  for (let field in filter) {
    if (filter[field]) {
      if (typeof filter[field] === 'number') {
        if (book[field] !== filter[field]) {
          return false;
        }
      }
      else if(typeof filter[field] === 'string'){
            if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
              return false;
            }

      }
    }
  }
  return true;
}
}

