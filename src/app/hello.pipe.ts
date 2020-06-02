import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello'
})
export class HelloPipe implements PipeTransform {

  transform(name:string,gender:string):string {
    if(gender.toLowerCase()=='male'){
      return 'Mr. '+ name;
    }else{
      return 'Mrs. '+ name;
    }
  }

}
