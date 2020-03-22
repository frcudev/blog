import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';

const MATERIAL_MODULES = [MatIconModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, FlexLayoutModule, ...MATERIAL_MODULES],
  exports: [CommonModule, FlexLayoutModule, ...MATERIAL_MODULES],
})
export class SharedModule {}
