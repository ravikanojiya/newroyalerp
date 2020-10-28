import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminDataService } from '../admin-data.service';
import { HrDataService } from 'src/app/hr/hr-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userform: FormGroup;
  getallemp: Array<any> = [];
  getalluser: Array<any> = [];
  getalluser1: Array<any> = [];
  getuserid: Array<any> = [];
  getdept: Array<any> = [];
  uid = 0;

  constructor(private service: AdminDataService, private hrsrv: HrDataService, private route: ActivatedRoute,
    private messageService: MessageService, private cs: ConfirmationService, private rut: Router) { }

  ngOnInit() {
    this.service.getempdet().then(res => {
      this.getalluser = res;
      console.log('getalluser'+res);
    });
    this.hrsrv.getemp().then(res => {
      this.getallemp = res;
      console.log(res);
    });
    this.hrsrv.getdept().then(res => {
      this.getdept = res;
    });
   
    this.uid = this.route.snapshot.params.id;
    console.log('ro   ====' + this.uid);        
    if (this.uid) {
      console.log(this.uid)
      this.service.getuserbyid(this.uid).then(res => {
        this.getuserid = res;
        console.log("idddd" + res[0].did)
        this.userform = new FormGroup({
          uid: new FormControl(this.getuserid[0].uid, Validators.required),
          empid: new FormControl(this.getuserid[0].empid, Validators.required),
          username: new FormControl(this.getuserid[0].username, Validators.required),
          password: new FormControl(this.getuserid[0].password, Validators.required),
          role: new FormControl(this.getuserid[0].role, Validators.required),
          editiong: new FormControl(this.getuserid[0].editiong, Validators.required),
          status: new FormControl(this.getuserid[0].status, Validators.required),
          did: new FormControl(this.getuserid[0].did, Validators.required)
        });
      });
    }     
    this.userform = new FormGroup({
      empid: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      editiong: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      did: new FormControl('', Validators.required)
    });
   
  }
 
  getlist() {
    this.service.getalluser().then(res => {
      this.getalluser = res;
    })
  }
  submit() {
    if (this.uid) {
      this.service.updateuser(this.userform.value).subscribe(res => {
        console.log(res);
      });
      this.messageService.add({ severity: 'success', summary: 'Update User', detail: 'User Updated Successfully..' });
      this.getlist();
      this.ngOnInit();
      this.rut.navigate(['./sidebar/admin/admin/users']);
    } else {
      this.service.adduser(this.userform.value).subscribe(res => {
        console.log(res);
      });
      this.messageService.add({ severity: 'success', summary: 'users', detail: 'User Added Successfully..' });
      this.getlist();
      this.ngOnInit();
      this.rut.navigate(['./sidebar/admin/admin/users']);
    }
  }
  deleteuser(value){
    this.service.deleteuser(value).subscribe(res=>{
     console.log(res);
    });
    this.messageService.add({ severity: 'success', summary: 'users', detail: 'User Deleted Successfully..' });
    this.getlist();
    this.ngOnInit();
    this.rut.navigate(['./sidebar/admin/admin/users']);

  }
  }

