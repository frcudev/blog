import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';
import {LoginComponent} from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CoreModule, SharedModule, LoginRoutingModule],
})
export class LoginModule {}
