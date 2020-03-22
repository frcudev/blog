import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  {
    path: 'newPost',
    loadChildren: () => import('./features/new-post/new-post.module').then(m => m.NewPostModule),
    canActivate: [AuthGuard],
  },
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
