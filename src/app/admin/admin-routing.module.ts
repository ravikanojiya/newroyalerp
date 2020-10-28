import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path:'sidebar',component:SidebarComponent,children:[
      {
        path: 'admin/admin', component: AdminComponent, children: [
          { path: 'users', component: UsersComponent },
          { path: 'users/edituser/:id', component: UsersComponent },
          { path: 'profile', component: ProfileComponent },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
