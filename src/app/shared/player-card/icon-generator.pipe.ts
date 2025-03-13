import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconGenerator',
  standalone: true,
})
export class IconGeneratorPipe implements PipeTransform {
  transform(value: string): string {
    let values = value.split(' ');
    if(values.length<2)
      return "NA"
    return values[0][0] + values[1][0];
  }
}
