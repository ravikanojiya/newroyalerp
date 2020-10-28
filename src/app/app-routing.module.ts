import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HrComponent } from './hr/hr/hr.component';
import { FacultyComponent } from './faculty/faculty/faculty.component';
import { AccountComponent } from './account/account/account.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { StudentComponent } from './students/student/student.component';
import { UsersComponent } from './admin/users/users.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { DepartmentsComponent } from './hr/departments/departments.component';
import { EmployeesComponent } from './hr/employees/employees.component';
import { PositionsComponent } from './hr/positions/positions.component';
import { PoslistComponent } from './hr/positions/poslist/poslist.component';
import { AddposComponent } from './hr/positions/addpos/addpos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  // { path: '',   redirectTo: 'LoginComponent', pathMatch: 'full' },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
