import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {NavigationComponent} from './layout/navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    // vendor
    RouterModule,

    // local
    SharedModule,
  ],
  exports: [NavigationComponent],
})
export class CoreModule {}
