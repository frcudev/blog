import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  {
    path: 'posts',
    loadChildren: () => import('./features/posts/posts.module').then(m => m.PostsModule),
    canActivate: [AuthGuard],
  },
  {path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
