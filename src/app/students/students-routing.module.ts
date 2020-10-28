import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { StudentComponent } from './student/student.component';
import { StudentregComponent } from './studentreg/studentreg.component';
import { ManagebatchComponent } from './managebatch/managebatch.component';


const routes: Routes = [
  {
    path: 'sidebar', component: SidebarComponent, children: [
      {
        path: 'students/students', component: StudentComponent, children: [
          { path: 'studentreg', component: StudentregComponent },
          { path: 'studentreg/edit/:id', component: StudentregComponent },
          { path: 'managebatch', component: ManagebatchComponent },
          { path: 'managebatch/edit/:id', component: ManagebatchComponent },

        ]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
