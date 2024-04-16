import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderpipePipe implements PipeTransform {

  transform(value: string): string {
    var final = "";
    if(value == "woman"){
       final = "زنانه"
    }
    if(value == "man"){
       final = "مردانه"
    }
   return final
  }

}
