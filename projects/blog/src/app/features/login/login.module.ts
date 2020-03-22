import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {LoginComponent} from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CoreModule, SharedModule, LoginRoutingModule],
})
export class LoginModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'google-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logos/google.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'github-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logos/github.svg')
    );
  }
}
