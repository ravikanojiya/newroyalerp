import { Component, OnInit } from '@angular/core';
import { HrDataService } from '../hr/hr-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  uid = 0;
  constructor(private service: HrDataService, private rut: Router) { }

  ngOnInit() {
  }
  get isloginhr() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    
    if (this.uid == 24) {
      return this.service.islogin()
    }
  }

  get isloginfac() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if (this.uid == 18) {
      return this.service.islogin()
    } else if (this.uid == 18) {
      return this.service.islogin()
    } else if (this.uid == 19) {
      return this.service.islogin()
    } else if (this.uid == 20) {
      return this.service.islogin()
    } else if (this.uid == 21) {
      return this.service.islogin()
    }
  }
  get isloginstudent() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if (this.uid == 10) {
      return this.service.islogin()
    }
  }
  get isloginadmin() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if (this.uid == 7) {
      return this.service.islogin()
    }
  }
 
  get isloginit() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if (this.uid == 8) {
      return this.service.islogin()
    }
  }
  logout() {
    sessionStorage.removeItem('islogin');
    sessionStorage.removeItem('uid');
    this.rut.navigate(['']);
  }

}
