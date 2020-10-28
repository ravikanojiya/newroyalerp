import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../admin-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
getall:Array<any>=[];
getallstd:Array<any>=[];
getallc:Array<any>=[];
getallg:Array<any>=[];
getallo:Array<any>=[];
  constructor(private adminservice :AdminDataService) { }
  ngOnInit() {  
    this.adminservice.getallemp().then(res=>{
      this.getall=res;
    });
    this.adminservice.getallstud().then(res=>{
      this.getallstd=res;
    });
    this.adminservice.getallclub().then(res=>{
      this.getallc=res;
    });
    this.adminservice.getallgen().then(res=>{
      this.getallg=res;
    });
    this.adminservice.getalloto().then(res=>{
      this.getallo=res;
    });
    }

}
