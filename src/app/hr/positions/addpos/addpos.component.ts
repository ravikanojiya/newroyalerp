import { Component, OnInit } from '@angular/core';
import { HrDataService } from '../../hr-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpos',
  templateUrl: './addpos.component.html',
  styleUrls: ['./addpos.component.css']
})
export class AddposComponent implements OnInit {
  btns: boolean = false;
  posform: FormGroup;
  getallposition: {};
  getposid: {};
  id = 0;
myclass:{};
  constructor(private service: HrDataService, private route: ActivatedRoute,private rut:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id)

    if (this.id) {
      this.service.getposbyid(this.id).then(res => {
        this.getposid = res;
        console.log("aaa" + this.getposid);
        console.log(this.route)

        this.posform = new FormGroup({
          posid: new FormControl(this.getposid[0].posid, Validators.required),
          poscode: new FormControl(this.getposid[0].poscode, Validators.required),
          posname: new FormControl(this.getposid[0].posname, Validators.required),
          posshort: new FormControl(this.getposid[0].posshort, Validators.required),
          poslevel: new FormControl(this.getposid[0].poslevel, Validators.required),
          description: new FormControl(this.getposid[0].description, Validators.required),
          status: new FormControl(this.getposid[0].status, Validators.required),
        });
      });
    }
    this.service.getposition().then(res => {
      this.getallposition = res;
    })
    this.posform = new FormGroup(
      {
        poscode: new FormControl('', Validators.required),
        posname: new FormControl('', Validators.required),
        posshort: new FormControl('', Validators.required),
        poslevel: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
      }
    )
  }
  submit() {
    if (this.id) {
      this.service.updatepos(this.posform.value).subscribe(res => {
        console.log("updated..." + res);
      })
    this.rut.navigate(['poslist']);

    } else {
      this.service.addposition(this.posform.value).subscribe(res => {
        console.log(res);
      })
    this.rut.navigate(['poslist']);

    }
  }
}
