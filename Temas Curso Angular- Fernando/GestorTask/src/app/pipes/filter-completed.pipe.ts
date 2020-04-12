import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filterCompleted',
  pure:false
})
export class FilterCompletedPipe implements PipeTransform {

  transform(list: List[], completed: boolean=true): List[] {

    return list.filter(lista=>{
      return lista.terminated=== completed;
    })
  }

}
