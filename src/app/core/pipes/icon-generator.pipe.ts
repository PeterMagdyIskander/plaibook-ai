import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconGenerator',
  standalone: true,
})
export class IconGeneratorPipe implements PipeTransform {
  transform(value: string): string {
    let values = value.split(' ');
    let res = '';
    values.forEach((val) => res+=val[0]);
    return res;
  }
}
