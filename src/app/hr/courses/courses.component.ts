import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HrDataService } from '../hr-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseform: FormGroup;
  cid = 0;
  allcourse: Array<any> = [];
  allcoursebyid: Array<any> = [];
  constructor(private service: HrDataService, private route: ActivatedRoute, private rut: Router) { }

  ngOnInit() {
    this.cid = this.route.snapshot.params.id;
      if (this.cid) {
        this.service.getcoursebyid(this.cid).then(res => {
          console.log(res);
          this.allcoursebyid = res;
        this.courseform = new FormGroup({
          cid: new FormControl(this.allcoursebyid[0].cid, Validators.required),
          cname: new FormControl(this.allcoursebyid[0].cname, Validators.required),
          ccode: new FormControl(this.allcoursebyid[0].ccode, Validators.required),
          status: new FormControl(this.allcoursebyid[0].status, Validators.required)
        });
      });
      }
 
    this.service.getcourses().then(res => {
      this.allcourse = res;
    })
    this.courseform = new FormGroup({
      cname: new FormControl('', Validators.required),
      ccode: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }
  submit() {
    if (this.cid) {
      this.service.updatecourse(this.courseform.value).subscribe(res => {
        console.log('updated....');
      })
    } else {
      this.service.addcourse(this.courseform.value).subscribe(res => {
        console.log('added...')
      })
    }

  }

}
