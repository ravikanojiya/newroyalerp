import { Component, OnInit } from '@angular/core';
import { FacultyDataService } from '../faculty-data.service';
import { AdminDataService } from 'src/app/admin/admin-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
uid=0;
getname:Array<any>=[];
batchcount=0;
public subscription: Subscription;
  constructor(private facservice:FacultyDataService ,private adminservice:AdminDataService,private fb: FormBuilder) { }
  infoForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ]
  });

  get name() { return this.infoForm.get('name'); }
  get email() { return this.infoForm.get('email'); }

  sendMail() {
    console.log(this.infoForm.value);
    
    this.subscription = this.facservice.sendEmail(this.infoForm.value).
    subscribe(data => {
      let msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, "error");
    } );
  }

  ngOnInit() {
    
    this.uid=parseInt(sessionStorage.getItem('uid'));
    this.adminservice.getuserbyid(this.uid).then(res=>{
      this.getname=res[0];
    });
    this.facservice.contfacbatch(this.uid).then(res=>{
      this.batchcount=res;
    });

  }

}
