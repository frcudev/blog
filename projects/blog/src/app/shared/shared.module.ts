import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';

const MATERIAL_MODULES = [MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, FlexLayoutModule, ReactiveFormsModule, ...MATERIAL_MODULES],
  exports: [CommonModule, FlexLayoutModule, ReactiveFormsModule, ...MATERIAL_MODULES],
})
export class SharedModule {}
