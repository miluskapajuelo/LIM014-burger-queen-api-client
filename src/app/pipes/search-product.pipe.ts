import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(list: any[], text: string): any {
    if(!text){
      return list
    }
    else{
      return list.filter(product => product.name.toUpperCase().includes(text.toUpperCase()))
    }

  }

}
