import { Component, OnInit } from '@angular/core';
import { HrDataService } from '../hr-data.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  empform: FormGroup;
  getallemp: Array<any> = [];
  getempbyid: Array<any> = [];
  id = 0;
  uploadedFiles=[];
  imagePath:string;
  fileToUpload: File = null;
  updateemp:{}
  mySubscription: any;
  getalldept:Array<any>=[];
  getallposition:Array<any>=[];
  constructor(private service: HrDataService, private route: ActivatedRoute, private rut: Router,
    private messageService: MessageService, private cs: ConfirmationService) {
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
    this.service.getdept().then(res => {
      this.getalldept = res;
    });
    this.service.getposition().then(res => {
      this.getallposition = res;
    })
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    
    this.service.getemp().then(res => {
      this.getallemp = res;
    });
    if (this.id) {
      this.service.getempbyid(this.id).then(res => {
        this.getempbyid = res;
        console.log("aaa" + this.getempbyid);
        console.log(this.route)

        this.empform = new FormGroup({
          empid: new FormControl(this.getempbyid[0].empid, Validators.required),
          empcode: new FormControl(this.getempbyid[0].empcode, Validators.required),
          ename: new FormControl(this.getempbyid[0].ename, Validators.required),
          did: new FormControl(this.getempbyid[0].did, Validators.required),
          posid: new FormControl(this.getempbyid[0].posid, Validators.required),
          doj: new FormControl(this.getempbyid[0].doj, Validators.required),
          contact: new FormControl(this.getempbyid[0].contact, Validators.required),
          email: new FormControl(this.getempbyid[0].email, Validators.required),
          status: new FormControl(this.getempbyid[0].status, Validators.required),
          enddate: new FormControl(this.getempbyid[0].enddate, Validators.required),
          image: new FormControl(this.uploadedFiles),
        });
        this.imagePath = this.getempbyid[0].image;
      });
    }

    this.empform = new FormGroup(
      {
        empid: new FormControl('', Validators.required),
        empcode: new FormControl('', Validators.required),
        ename: new FormControl('', Validators.required),
        did: new FormControl('', Validators.required),
        posid: new FormControl('', Validators.required),
        doj: new FormControl('', Validators.required),
        contact: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        enddate: new FormControl('', Validators.required),
        image: new FormControl(this.uploadedFiles),
      }
    )
  }
  handleFileInput(files: FileList) {
    if (files.length > 0) { // a file was selected
      this.fileToUpload = files.item(0);
      this.service.postFile(files.item(0)).subscribe(i => {
        console.log("imagename" + i["name"]);
        this.uploadedFiles.push(i["name"]);
      });
    }
  }
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  getlist() {
    this.service.getemp().then(res => {
      this.getallemp = res;
    });
  }
  submit() {
    if (this.id) {
      this.service.updateemp(this.empform.value).subscribe(res => {
        console.log("updated..." + res);
      });
     this.messageService.add({severity:'success', summary:'Update employee', detail:'Employee Updated Successfully..'});
      this.getlist();
      this.rut.navigate(['./sidebar/hr/hr/employees']);

    } else {
      this.service.addemp(this.empform.value).subscribe(res => {
      });
      this.messageService.add({severity:'success', summary:'Employee', detail:'Employee Added Successfully..'});
      this.getlist();
      this.rut.navigate(['./sidebar/hr/hr/employees']);

    }
  }
  deleteemp(value) {
    this.cs.confirm({
      message: 'Do u want to delete Employees...?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.service.deleteemp(value).subscribe(res => {
          console.log("Emp deleted....");
        });

        this.getallemp = this.getallemp.filter(item => item.empid != value);
      },
      reject: () => {
        [{ severity: 'success', summary: 'Delete', detail: '' }];
      }

    });


   

  }

}
