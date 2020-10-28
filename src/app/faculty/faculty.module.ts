import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { BatchesComponent } from './batches/batches.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ManageSessionComponent } from './manage-session/manage-session.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { BatchstudentComponent } from './batchstudent/batchstudent.component';
import { DataTablesModule } from 'angular-datatables';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';




@NgModule({
  declarations: [BatchesComponent, TimetableComponent, ManageSessionComponent, ManageProfileComponent, FacultyComponent, BatchstudentComponent],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    FormsModule, ReactiveFormsModule, CarouselModule,DataTablesModule,DialogModule,ToastModule,ProgressBarModule,ProgressSpinnerModule
  ],providers:[MessageService]
})
export class FacultyModule { }
