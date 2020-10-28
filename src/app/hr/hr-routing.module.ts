import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrComponent } from './hr/hr.component';
import { PositionsComponent } from './positions/positions.component';
import { AddposComponent } from './positions/addpos/addpos.component';
import { PoslistComponent } from './positions/poslist/poslist.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProfileComponent } from '../admin/profile/profile.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  {
    path: 'sidebar', component: SidebarComponent, children: [
      {
        path: 'hr/hr', component: HrComponent, children: [
       
          {path: 'position', component: PositionsComponent, children: [
              { path: 'addpos', component: AddposComponent },
              { path: 'poslist', component: PoslistComponent },
              { path: 'poslist/edit/:id', component: AddposComponent },
            ]
          },
          { path: "departments", component: DepartmentsComponent },
          { path: 'departments/edit/:id', component: DepartmentsComponent },
          { path: 'employees', component: EmployeesComponent },
          { path: 'employees/edit/:id', component: EmployeesComponent },
          { path: 'courses', component: CoursesComponent },
          { path: 'courses/editcourse/:id', component: CoursesComponent },
          { path: 'profile', component: ProfileComponent }
        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
