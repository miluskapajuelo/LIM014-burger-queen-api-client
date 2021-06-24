import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'calculateTime'
})
export class CalculateTimePipe implements PipeTransform {

  transform(status:string, dateEntry:string, dateProcesed:string): unknown {
    if(status!=='pending'){
      const dateOld = dayjs(dateEntry)
      const dateNow = dayjs(dateProcesed)
      const minutes = dateNow.diff(dateOld, 'm')
      const hours = dateNow.diff(dateOld, 'h')
      return `time: ${hours >= 1 ? `${hours}:${minutes-60*hours} min`: `${minutes} min`}`
    }
    else{
      return ''
    }

  }
}
