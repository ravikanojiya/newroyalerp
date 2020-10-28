import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
id=0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params.id;
    console.log(this.id);
    
  }

}
