import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';

const googleLogoURL = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';

const MATERIAL_MODULES = [MatIconModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, FlexLayoutModule, ...MATERIAL_MODULES],
  exports: [CommonModule, FlexLayoutModule, ...MATERIAL_MODULES],
})
export class SharedModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'google-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL)
    );

    this.matIconRegistry.addSvgIcon(
      'github-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/github.svg')
    );
  }
}
