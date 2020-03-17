import {NgModule} from '@angular/core';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    // material
    MatToolbarModule,
  ],
  exports: [NavigationComponent],
})
export class CoreModule {}
