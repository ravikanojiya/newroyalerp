import { Component, OnInit } from '@angular/core';
import { HrDataService } from '../hr-data.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  deptform: FormGroup;
  id = 0;
  getdept: Array<any> = [];
  getdeptid: Array<any> = [];
  getalldept: Array<any> = [];
  m: string;

  mySubscription: any;
  constructor(private service: HrDataService, private route: ActivatedRoute, private rut: Router,
    private messageService:MessageService,private cs: ConfirmationService) {
    this.rut.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.rut.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.rut.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id)
    this.service.getdept().then(res => {
      this.getalldept = res;
    });
    if (this.id) {
      this.service.getdeptbyid(this.id).then(res => {
        this.getdeptid = res;
        console.log("aaa" + this.getdeptid);
        console.log(this.route)

        this.deptform = new FormGroup({
          did: new FormControl(this.getdeptid[0].did, Validators.required),
          deptcode: new FormControl(this.getdeptid[0].deptcode, Validators.required),
          deptname: new FormControl(this.getdeptid[0].deptname, Validators.required),
          deptshort: new FormControl(this.getdeptid[0].deptshort, Validators.required),
          deptlevel: new FormControl(this.getdeptid[0].deptlevel, Validators.required),
          positiondesc: new FormControl(this.getdeptid[0].positiondesc, Validators.required),
          status: new FormControl(this.getdeptid[0].status, Validators.required),
        });
      });
    }

    this.deptform = new FormGroup(
      {
        deptcode: new FormControl('', Validators.required),
        deptname: new FormControl('', Validators.required),
        deptshort: new FormControl('', Validators.required),
        deptlevel: new FormControl('', Validators.required),
        positiondesc: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
      }
    )
  }
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  getlist() {
    this.service.getdept().then(res => {
      this.getalldept = res;
    });
  }
  submit() {
    if (this.id) {
      this.service.updatedept(this.deptform.value).subscribe(res => {
        console.log("updated..." + res);
      });
     this.messageService.add({severity:'success', summary:'Update Departments', detail:'Departments Updated Successfully..'});
      this.getlist();
      this.rut.navigate(['./sidebar/hr/hr/departments']);

    } else {
      this.service.adddept(this.deptform.value).subscribe(res => {
      });
      this.messageService.add({severity:'success', summary:'Departments', detail:'Departments Added Successfully..'});
      this.getlist();
      this.rut.navigate(['./sidebar/hr/hr/departments']);


    }
  }
  deletedept(value) {
    this.cs.confirm({
      message: 'Do u want to delete Department...?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.service.deletedept(value).subscribe(res => {
          console.log("dept deleted....");
        });

        this.getalldept = this.getalldept.filter(item => item.did != value);
      },
      reject: () => {
        [{ severity: 'success', summary: 'Delete', detail: '' }];
      }

    });


   

  }
}


