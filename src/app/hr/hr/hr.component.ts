import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDataService } from 'src/app/admin/admin-data.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
id=0;
uid=0;
getname:Array<any>=[];
  constructor(private route:ActivatedRoute,private adminservice:AdminDataService) { }

  ngOnInit() {
    this.id= this.route.snapshot.params.id;
    console.log(this.id)
    this.route.queryParams.subscribe(res=>{
      this.id=res.uid;
      console.log("dddddd"+this.id);
    });
    this.uid=parseInt(sessionStorage.getItem('uid'));
    this.adminservice.getuserbyid(this.uid).then(res=>{
      this.getname=res[0];
    });
  }

}
