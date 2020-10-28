import { Component, OnInit } from "@angular/core";
import { StudentsDataService } from "../students-data.service";
import { HrDataService } from "src/app/hr/hr-data.service";
import { FacultyDataService } from "src/app/faculty/faculty-data.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { error } from "protractor";

@Component({
  selector: "app-managebatch",
  templateUrl: "./managebatch.component.html",
  styleUrls: ["./managebatch.component.css"],
})
export class ManagebatchComponent implements OnInit {
  mbform: FormGroup;
  mbbform: FormGroup;
  mboform: FormGroup;
  getemp: Array<any> = [];
  getstud: Array<any> = [];
  getcstud: Array<any> = [];
  getbstud: Array<any> = [];
  getostud: Array<any> = [];
  getbatch: Array<any> = [];
  getcbatch: Array<any> = [];
  getbbatch: Array<any> = [];
  getobatch: Array<any> = [];
  getmbatchbyid: Array<any> = [];
  getmbatch: Array<any> = [];
  bsid = 0;
  totalclub = 0;
  tdate = new Date();
  errorMsg;
  db: Boolean;
  constructor(
    private service: StudentsDataService,
    private hrservice: HrDataService,
    private facservice: FacultyDataService,
    private rut: ActivatedRoute,
    private route: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.tdate = new Date();
    this.bsid = this.rut.snapshot.params.id;
    if (this.bsid) {
      this.service.getmbatchbyid(this.bsid).then((res) => {
        this.getmbatchbyid = res;

        this.mbform = new FormGroup({
          bsid: new FormControl(this.getmbatchbyid[0].bsid),
          batchid: new FormControl(
            this.getmbatchbyid[0].batchid,
            Validators.required
          ),
          sid: new FormControl(this.getmbatchbyid[0].sid, Validators.required),
          status: new FormControl(
            this.getmbatchbyid[0].status,
            Validators.required
          ),
          add_date: new FormControl(new Date()),
        });

        this.mbbform = new FormGroup({
          bsid: new FormControl(this.getmbatchbyid[0].bsid),
          batchid: new FormControl(
            this.getmbatchbyid[0].batchid,
            Validators.required
          ),
          sid: new FormControl(this.getmbatchbyid[0].sid, Validators.required),
          status: new FormControl(
            this.getmbatchbyid[0].status,
            Validators.required
          ),
          add_date: new FormControl(new Date()),
        });

        this.mboform = new FormGroup({
          bsid: new FormControl(this.getmbatchbyid[0].bsid),
          batchid: new FormControl(
            this.getmbatchbyid[0].batchid,
            Validators.required
          ),
          sid: new FormControl(this.getmbatchbyid[0].sid, Validators.required),
          status: new FormControl(
            this.getmbatchbyid[0].status,
            Validators.required
          ),
          add_date: new FormControl(new Date()),
        });
      });
    }
    this.service.getmbatch().then(
      (res) => {
        this.getmbatch = res;
      },
      (error) => (this.errorMsg = error)
    );
    this.service.getbatchdetail().then((res) => {
      this.getbatch = res;
    });
    this.service.getcbatchdetail().then((res) => {
      this.getcbatch = res;
    });
    this.service.getbbatchdetail().then((res) => {
      this.getbbatch = res;
    });
    this.service.getobatchdetail().then((res) => {
      this.getobatch = res;
    });
    this.service.getstudent().then((res) => {
      this.getstud = res;
    });
    this.service.getcstudent().then((res) => {
      this.getcstud = res;
    });
    this.service.getbstudent().then((res) => {
      this.getbstud = res;
    });
    this.service.getostudent().then((res) => {
      this.getostud = res;
    });
    this.service.clubcounttody().then((res) => {
      this.totalclub = res;
    });
    this.mbform = new FormGroup({
      batchid: new FormControl("", Validators.required),
      sid: new FormControl("", Validators.required),
      status: new FormControl("", Validators.required),
      add_date: new FormControl(new Date()),
    });
    this.mbbform = new FormGroup({
      batchid: new FormControl("", Validators.required),
      sid: new FormControl("", Validators.required),
      status: new FormControl("", Validators.required),
      add_date: new FormControl(new Date()),
    });
    this.mboform = new FormGroup({
      batchid: new FormControl("", Validators.required),
      sid: new FormControl("", Validators.required),
      status: new FormControl("", Validators.required),
      add_date: new FormControl(new Date()),
    });
  }
  submit() {
    if (this.bsid) {
      this.service.updatembatch(this.mbform.value).subscribe((res) => {
        console.log("updated...");
      });
      this.messageService.add({
        severity: "success",
        summary: "CLUB",
        detail: "Club student Updated..",
      });
      this.route.navigate(["./sidebar/students/students/managebatch"]);
    } else {
      this.service.mbatchadd(this.mbform.value).subscribe((res) => {
        console.log("Added...");
      });
      this.messageService.add({
        severity: "success",
        summary: "CLUB",
        detail: "Club student Added..",
      });

      this.route.navigate(["./sidebar/students/students/managebatch"]);
    }
  }
  submitb() {
    if (this.bsid) {
      this.service.updatembatch(this.mbbform.value).subscribe((res) => {
        console.log("updated...");
      });
      this.messageService.add({
        severity: "success",
        summary: "BATCH",
        detail: "Batch student Updated..",
      });

      this.route.navigate(["./sidebar/students/students/managebatch"]);
    } else {
      this.service.mbatchadd(this.mbbform.value).subscribe((res) => {
        console.log("Added...");
      });
      this.messageService.add({
        severity: "success",
        summary: "BATCH",
        detail: "Batch student Added..",
      });

      this.route.navigate(["./sidebar/students/students/managebatch"]);
    }
  }
  submito() {
    if (this.bsid) {
      this.service.updatembatch(this.mboform.value).subscribe((res) => {
        console.log("updated...");
      });
      this.messageService.add({
        severity: "success",
        summary: "One To One",
        detail: "One to One student Updated..",
      });

      this.route.navigate(["./sidebar/students/students/managebatch"]);
    } else {
      this.service.mbatchadd(this.mboform.value).subscribe((res) => {
        console.log("Added...");
      });
      this.messageService.add({
        severity: "success",
        summary: "One To One",
        detail: "One to One student Added..",
      });

      this.route.navigate(["./sidebar/students/students/managebatch"]);
    }
  }
  deletembatch(value) {
    this.service.deletembatch(value).subscribe((res) => {
      console.log("deleted .....");
    });
    this.messageService.add({
      severity: "success",
      summary: "Success Message",
      detail: "Order submitted",
    });

    this.route.navigate(["./sidebar/students/students/managebatch"]);
  }
}
