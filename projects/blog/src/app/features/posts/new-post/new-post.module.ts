import {NgModule} from '@angular/core';
import {CoreModule} from '../../../core/core.module';
import {SharedModule} from '../../../shared/shared.module';
import {NewPostRoutingModule} from './new-post-routing.module';
import {NewPostComponent} from './new-post.component';

@NgModule({
  declarations: [NewPostComponent],
  imports: [CoreModule, SharedModule, NewPostRoutingModule],
})
export class NewPostModule {}
