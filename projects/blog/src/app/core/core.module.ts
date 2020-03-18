import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarComponent} from './layout/toolbar/toolbar.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    // vendor
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    // material
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatToolbarModule,
  ],
  exports: [ToolbarComponent],
})
export class CoreModule {}
