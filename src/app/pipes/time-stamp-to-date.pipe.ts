import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStampToDate'
})
export class TimeStampToDatePipe implements PipeTransform {

  transform(timestamp:number): string {

        var date = new Date(timestamp);
        var day = date.getDate()
        var month = date.getMonth()+1;
        var year =date.getFullYear()
        return day+"/"+month+"/"+year
          }

}
