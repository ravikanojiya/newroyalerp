import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import {PanelModule} from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {MessageService, ConfirmationService} from 'primeng/api';
import { EdituserComponent } from './edituser/edituser.component';



@NgModule({
  declarations: [UsersComponent, AdminComponent, ProfileComponent, EdituserComponent],
  imports: [
    CommonModule,
    TabViewModule,
    TabMenuModule,
    PanelModule,
    FormsModule,ReactiveFormsModule,
    SplitButtonModule,
    AdminRoutingModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers:[MessageService, ConfirmationService]
})
export class AdminModule { }
