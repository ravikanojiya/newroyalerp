import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HrDataService } from '../hr-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  btns: boolean = false;
  posform: FormGroup;
  getallposition : {};
  getposid : {};
  id=0;

  constructor(private service: HrDataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params.id;
    console.log(this.id)

    if(this.id){
      this.service.getposbyid(this.id).then(res => {
        this.getposid = res;
      console.log("aaa"+res);
    console.log(this.route)

        this.posform = new FormGroup(
          {
            posid: new FormControl(this.getposid[0].posid),
            poscode: new FormControl(this.getposid[0].poscode, Validators.required),
            posname: new FormControl(this.getposid[0].posname, Validators.required),
            posshort: new FormControl(this.getposid[0].posshort, Validators.required),
            poslevel: new FormControl(this.getposid[0].poslevel, Validators.required),
            description: new FormControl(this.getposid[0].description, Validators.required),
            status: new FormControl(this.getposid[0].status, Validators.required),
          }
        )

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
    this.service.addposition(this.posform.value).subscribe(res => {
      console.log(res);
    })
  }
}
