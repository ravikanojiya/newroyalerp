import { Component, OnInit } from '@angular/core';
import { HrDataService } from '../../hr-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poslist',
  templateUrl: './poslist.component.html',
  styleUrls: ['./poslist.component.css']
})
export class PoslistComponent implements OnInit {
  getallposition:Array<any>=[];
  status: string;
  myclass = {}
  constructor(private service: HrDataService, private rut: Router) { }

  ngOnInit() {
    this.service.getposition().then(res => {
      this.getallposition = res;

    })
  }
  deletepos(value) {
    this.service.deletepos(value).subscribe(res => {
      console.log('Position Deleted....');
    })
    this.rut.navigate(['/poslist']);
    this.ngOnInit();
  }
}
