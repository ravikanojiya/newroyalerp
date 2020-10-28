import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentregComponent } from './studentreg/studentreg.component';
import { ManagebatchComponent } from './managebatch/managebatch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [StudentComponent, StudentregComponent, ManagebatchComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,ReactiveFormsModule, DataTablesModule,ToastModule
  ],providers:[MessageService]
})
export class StudentsModule { }
