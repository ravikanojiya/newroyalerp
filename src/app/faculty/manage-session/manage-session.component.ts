import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacultyDataService } from '../faculty-data.service';

@Component({
  selector: 'app-manage-session',
  templateUrl: './manage-session.component.html',
  styleUrls: ['./manage-session.component.css']
})
export class ManageSessionComponent implements OnInit {
  sform: FormGroup;
  getbatchbyid: Array<any> = [];
  uid = 0;
  getsessions: Array<any> = [];
  constructor(private facservice: FacultyDataService) { }

  ngOnInit() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    console.log(this.uid)
    this.facservice.getfacbatchbyid(this.uid).then(res => {
      this.getbatchbyid = res;
      console.log("aaaa", res);
    });
    this.facservice.getsessionsbyid(this.uid).then(res => {
      this.getsessions = res;
      console.log("seesss", res);
    });
    this.sform = new FormGroup({
      uid: new FormControl(this.uid, Validators.required),
      stime: new FormControl('', Validators.required),
      etime: new FormControl('', Validators.required),
      mon: new FormControl('', Validators.required),
      tue: new FormControl('', Validators.required),
      wed: new FormControl('', Validators.required),
      thu: new FormControl('', Validators.required),
      fri: new FormControl('', Validators.required),
      sat: new FormControl('', Validators.required),
      sun: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  
  }

  submit() {
    this.facservice.addsession(this.sform.value).subscribe(res => {
      console.log('Session added');
    });
  }

}
