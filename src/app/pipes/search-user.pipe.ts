import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(list: any[], text: string): any {
    if(!text){
      return list
    }
    else{
      return list.filter(user => user.email.toUpperCase().includes(text.toUpperCase()))
    }

  }

}
