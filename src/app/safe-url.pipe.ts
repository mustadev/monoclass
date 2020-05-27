import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
// add suport for iframe and external links
@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    /**
     * Transforms safe url to bypass Security Trust Resource
     * @param url 
     * @returns  
     */
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}