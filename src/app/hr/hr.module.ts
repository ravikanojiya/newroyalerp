import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { HrRoutingModule } from './hr-routing.module';
import { DepartmentsComponent } from './departments/departments.component';
import { PositionsComponent } from './positions/positions.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProfileComponent } from './profile/profile.component';
import { HrComponent } from './hr/hr.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PoslistComponent } from './positions/poslist/poslist.component';
import { AddposComponent } from './positions/addpos/addpos.component';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {MessageService, ConfirmationService} from 'primeng/api';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [DepartmentsComponent, PositionsComponent, EmployeesComponent, ProfileComponent, HrComponent,PoslistComponent, AddposComponent, CoursesComponent ],
  imports: [
    CommonModule,
    HrRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,ToastModule,ConfirmDialogModule
  ],
  providers:[MessageService,ConfirmationService]
})
export class HrModule { }
