import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostsComponent} from './posts/posts.component';

const routes: Routes = [
  {path: '', redirectTo: 'newPost', pathMatch: 'full'},
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: 'newPost',
        loadChildren: () => import('./new-post/new-post.module').then(m => m.NewPostModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
