import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsDataService } from '../students-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-studentreg',
  templateUrl: './studentreg.component.html',
  styleUrls: ['./studentreg.component.css']
})
export class StudentregComponent implements OnInit {
  studform: FormGroup;
  uploadedFiles = [];
  imagePath: string;
  fileToUpload: File = null;
  sid = 0;
  getstudbyid: Array<any> = [];
  getallstud: Array<any> = [];
  errMsg;
  constructor(private service: StudentsDataService, private rut: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.service.getstudent().then(res => {
      this.getallstud = res
      ,error => {
        this.errMsg=error
      }
    })
    this.sid = this.rut.snapshot.params.id;
    if (this.sid) {
      this.service.getstudentbyid(this.sid).then(res => {
        this.getstudbyid = res;
        this.studform = new FormGroup({
          sid: new FormControl(this.getstudbyid[0].sid),
          scode: new FormControl(this.getstudbyid[0].scode, Validators.required),
          fn: new FormControl(this.getstudbyid[0].fn, Validators.required),
          mn: new FormControl(this.getstudbyid[0].mn, Validators.required),
          ln: new FormControl(this.getstudbyid[0].ln, Validators.required),
          gender: new FormControl(this.getstudbyid[0].gender, Validators.required),
          dob: new FormControl(this.getstudbyid[0].dob, Validators.required),
          doj: new FormControl(this.getstudbyid[0].doj, Validators.required),
          qualification: new FormControl(this.getstudbyid[0].qualification, Validators.required),
          collegename: new FormControl(this.getstudbyid[0].collegename, Validators.required),
          ref: new FormControl(this.getstudbyid[0].ref, Validators.required),
          mobile: new FormControl(this.getstudbyid[0].mobile, Validators.required),
          email: new FormControl(this.getstudbyid[0].email, Validators.required),
          inqdetail: new FormControl(this.getstudbyid[0].inqdetail, Validators.required),
          status: new FormControl(this.getstudbyid[0].status, Validators.required),
          address: new FormControl(this.getstudbyid[0].address, Validators.required),
          studenttype: new FormControl(this.getstudbyid[0].studenttype, Validators.required),
          regi_date: new FormControl(new Date()),
          image: new FormControl(this.uploadedFiles)
        });
        this.imagePath = this.getstudbyid[0].image;
      })
    }
    this.studform = new FormGroup({
      scode: new FormControl('', Validators.required),
      fn: new FormControl('', Validators.required),
      mn: new FormControl('', Validators.required),
      ln: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      doj: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      collegename: new FormControl('', Validators.required),
      ref: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      inqdetail: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      studenttype: new FormControl('', Validators.required),
      regi_date: new FormControl(new Date()),
      image: new FormControl(this.uploadedFiles)
    });
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
  submit() {
    if (this.sid) {
      this.service.updatestudent(this.studform.value).subscribe(res => {
        console.log("updated...");
      });
      this.route.navigate(['./sidebar/students/students/studentreg']);
    } else {
      this.service.addstudent(this.studform.value).subscribe(res => {
        console.log('studentaddedd');
      });
      this.route.navigate(['./sidebar/students/students/studentreg']);
    }
  }
  deletestud(value){
    this.service.deletestudent(value).subscribe(res=>{
      console.log('deleted...')
    })
  }
}
