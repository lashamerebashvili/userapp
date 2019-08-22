import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserPostsComponent } from './users/user-posts/user-posts.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/:id',
        component: UserDetailsComponent
      },
      {
        path: 'posts/:id',
        component: UserPostsComponent
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      /*ქვემოთ მოცემული კოდით უზრუნველვყოფ იმას, რომ თუ path არ დაემთხვევა არცერთ ზემოთ ჩამოთვლილს,
      ავტომატურად გადაგვამისამართოს UsersComponent-ზე
      */
      {
        path: '**',
        redirectTo: 'users',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
