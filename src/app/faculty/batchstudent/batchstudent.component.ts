import { Component, OnInit } from '@angular/core';
import { FacultyDataService } from '../faculty-data.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsDataService } from 'src/app/students/students-data.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-batchstudent',
  templateUrl: './batchstudent.component.html',
  styleUrls: ['./batchstudent.component.css']
})
export class BatchstudentComponent implements OnInit {
  batchid = 0;
  getstudent: Array<any> = [];
  uid = 0;
  sid = 0;
  countall: Array<any> = [];
  mbsform: FormGroup;
  addstudent: Array<any> = [];
  getostud: Array<any> = [];
  getcstud: Array<any> = [];
  getbstud: Array<any> = [];
  getemailid: Array<any> = [];
  public subscription: Subscription;

  constructor(private facservice: FacultyDataService, private studservice: StudentsDataService, private messageService: MessageService,
    private route: ActivatedRoute,private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.batchid = this.route.snapshot.params.id;
    console.log(this.batchid)
    this.facservice.getbatchstudent(this.batchid).then(res => {
      this.getstudent = res;
      console.log("asdfasdfasdfasdfasdfasdfasdfasdfasdf" + this.getstudent)
      if (this.getstudent[0].studenttype == 'club') {
        this.studservice.getcstudent().then(res => {
          console.log(res);
          this.addstudent = res;
        });
      } else if (this.getstudent[0].studenttype == 'gen') {
        this.studservice.getbstudent().then(res => {
          this.addstudent = res;
          console.log(res);
        });
      } else if (this.getstudent[0].studenttype == 'oto') {
        this.studservice.getostudent().then(res => {
          this.addstudent = res;
          console.log(res);
        });
      }
    });
    // this.studservice.getmbatch().then(res => {
    // })
    this.mbsform = new FormGroup({
      batchid: new FormControl(this.batchid, Validators.required),
      sid: new FormControl('', Validators.required),
      status: new FormControl('Active', Validators.required),
      add_date: new FormControl(new Date()),
    });
  }
  getemail(event) {
    // console.log('eeee',event);
    this.sid = event.target.value;
    console.log("ssss" + this.sid);
    this.facservice.getemailstudent(this.sid).then(res => {
      this.getemailid = res;
    });
  }
  sendmail(value) {
    this.facservice.getemailstudent(value).then(res => {
      this.getemailid = res;
      console.log(this.getemailid[0].grplink + "emailsent");
      this.subscription = this.facservice.sendEmail(this.getemailid[0]).
        subscribe(data => {
          let msg = data['message'];
          // alert();
          this.messageService.add({ severity: 'success', summary: 'Mail-Student', detail: msg });
          // console.log(data, "success");
        }, error => {
          console.error(error, "error");
        });

    });

  }
  submitstd() {
    this.studservice.mbatchadd(this.mbsform.value).subscribe(res => {
      console.log('Yahoooooooooooooo');
    });



    this.messageService.add({ severity: 'success', summary: 'Students', detail: 'Student Added successfully..' });
    this.ngOnInit();
  }
  deletems(value) {
    this.studservice.deletems(value).subscribe(res => {
      console.log('mbsdeleted.....');
    });
    this.messageService.add({ severity: 'error', summary: 'Remove-Student', detail: 'Student Deleted...' });
    this.ngOnInit();
  }

}
