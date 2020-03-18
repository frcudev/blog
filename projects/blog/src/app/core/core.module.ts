import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarComponent} from './layout/toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    // vendor
    CommonModule,

    // material
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
  ],
  exports: [ToolbarComponent],
})
export class CoreModule {}
