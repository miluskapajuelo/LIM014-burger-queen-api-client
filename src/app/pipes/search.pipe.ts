import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], text: string): any {
    if(!text){
      return list
    }
    else{
      return list.filter(user => user.name.toUpperCase().includes(text.toUpperCase()))
    }

  }

}
