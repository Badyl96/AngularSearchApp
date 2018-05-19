import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common' 


@Pipe({
  name: 'datePipe'
})
export class DatePipePipe extends DatePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    var test = value.split(' ');
    var test2 = test[0].split('.');
    var year = test2[2];
    var month = Number(test2[1]);
    var convertMonth;
    var convertDay;
    if(month < 10) 
    {
      var tempMonth = month;
      convertMonth = "0"+String(tempMonth) 
    } else{
      convertMonth = month;
    }
    var day = Number(test2[0]);
    if(day <10) 
    {
      var tempday = day;
      convertDay = "0"+String(tempday);
    }
    else{
      convertDay = day;

    }
    var val =convertDay+'.'+convertMonth+'.'+year+' '+test[1];
    return val;
  }

}
