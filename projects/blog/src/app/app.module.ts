import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';

import {LoadingService} from './core/services/loading.service';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // vendor
    BrowserAnimationsModule,
    CommonModule,

    // local
    CoreModule,
    AppRoutingModule,
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
