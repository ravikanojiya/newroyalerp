import { Component, OnInit } from '@angular/core';
import { FacultyDataService } from 'src/app/faculty/faculty-data.service';
import { AdminDataService } from 'src/app/admin/admin-data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
uid=0;
getname:Array<any>=[];

  constructor(private facservice:FacultyDataService ,private adminservice:AdminDataService) { }

  ngOnInit() {
    this.uid=parseInt(sessionStorage.getItem('uid'));
    this.adminservice.getuserbyid(this.uid).then(res=>{
      this.getname=res[0];
    });
  }

}
