import { Pipe, PipeTransform }  from '@angular/core';

@Pipe({ name: 'titleCase' })
export class TitleCasePipe implements PipeTransform {
    public transform(input: string): string {
        if (!input) {
            return '';
        } else {
            return input.replace(/([a-z])([A-Z])/g, '$1 $2').trim();
        }
    }

}