import {NgModule} from '@angular/core';
import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts/posts.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [PostsRoutingModule],
})
export class PostsModule {}
