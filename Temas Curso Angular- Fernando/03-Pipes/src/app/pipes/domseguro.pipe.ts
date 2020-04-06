import { Pipe, PipeTransform } from '@angular/core';
import{DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){}

  transform(value: any, args?: any): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
