import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FacultyComponent } from './faculty/faculty.component';
import { BatchesComponent } from './batches/batches.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ManageSessionComponent } from './manage-session/manage-session.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { BatchstudentComponent } from './batchstudent/batchstudent.component';
import { StudentregComponent } from '../students/studentreg/studentreg.component';


const routes: Routes = [
  {
    path: 'sidebar', component: SidebarComponent, children: [
      {
        path: 'faculty/faculty', component: FacultyComponent, children: [
          { path: 'batches', component: BatchesComponent },
          { path: 'batches/editbatch/:id', component: BatchesComponent },
          { path: 'batches/batchstudent/:id', component: BatchstudentComponent },
          { path: 'batches/editbs/:id', component: BatchstudentComponent },
          { path: 'timetable', component: TimetableComponent },
          { path: 'msession', component: ManageSessionComponent },
          { path: 'mprofile', component: ManageProfileComponent },
          {path: 'studentreg', component: StudentregComponent}
        ]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
