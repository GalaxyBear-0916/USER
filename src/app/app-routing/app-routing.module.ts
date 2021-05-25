import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {ChooseComponent} from '../choose/choose.component';
import {UsersDetailComponent} from '../users-detail/users-detail.component';

const routes: Routes = [
  { path: '', component: ChooseComponent},
  { path: 'star', component: UsersComponent },
  { path: 'detail/:id', component: UsersDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
