import { Pipe, PipeTransform } from '@angular/core';
import {course} from '../course'

@Pipe({
  name: 'filterprice'
})
export class FilterpricePipe implements PipeTransform {

  transform(courses: course[], pricetype: any): any {
    let temp:course[]=[];
    if (pricetype == "highly priced"){
    for (let x in courses)
      if (courses[x].price>=2000 )
      temp.push(courses[x]);
      return temp;

    }
      else if (pricetype == "moderately priced"){
        for (let x in courses)
      if (courses[x].price<=3000)
    temp.push(courses[x]);
  return temp;
}
else 
    return courses;
  }

}
