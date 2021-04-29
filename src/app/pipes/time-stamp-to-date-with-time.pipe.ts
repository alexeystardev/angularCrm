import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStampToDateWithTime'
})
export class TimeStampToDateWithTimePipe implements PipeTransform {

  transform(timestamp:number): string {

        var date = new Date(timestamp);
		let customerTime= ('0' + date.getHours()).slice(-2) + ':' 
		+ ('0' + date.getMinutes()).slice(-2) + ':'
		+ ('0' + date.getSeconds()).slice(-2);
		let customerDate = ('0' + date.getDate()).slice(-2) + '/'
             + ('0' + (date.getMonth()+1)).slice(-2) + '/'
             + date.getFullYear();
			 return customerDate + " at " + customerTime
          }
}
