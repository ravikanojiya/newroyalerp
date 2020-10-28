import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private service: DataService, private rut: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  login() {
    this.service.getlogin(this.loginform.value).subscribe(res => {
      console.log(res.data[0]);
      if (res.data[0] != '') {
        if (res.data[0].did == 50) {
          if (res.data[0].uid == 18) {
            sessionStorage.setItem('islogin', 'true');
            sessionStorage.setItem('uid', res.data[0].uid);
          this.rut.navigate(['/sidebar/faculty/faculty']);
          }else if(res.data[0].uid == 19){
            sessionStorage.setItem('islogin', 'true');
            sessionStorage.setItem('uid', res.data[0].uid);
          this.rut.navigate(['/sidebar/faculty/faculty']);

          }
          else if(res.data[0].uid == 20){
            sessionStorage.setItem('islogin', 'true');
            sessionStorage.setItem('uid', res.data[0].uid);
          this.rut.navigate(['/sidebar/faculty/faculty']);

          }
          else if(res.data[0].uid == 21){
            sessionStorage.setItem('islogin', 'true');
            sessionStorage.setItem('uid', res.data[0].uid);
          this.rut.navigate(['/sidebar/faculty/faculty']);

          }else{
          this.rut.navigate(['']);            
          }
        } else if (res.data[0].did == 11) {
          // this.rut.navigate(['/sidebar/hr/hr', res.data[0].uid]);
          this.rut.navigate(['/sidebar/hr/hr/']);
          sessionStorage.setItem('islogin', 'true');
          sessionStorage.setItem('uid', res.data[0].uid);
        }
        else if (res.data[0].did == 3) {
          this.rut.navigate(['/sidebar/admin/admin']);
          sessionStorage.setItem('islogin', 'true');
          sessionStorage.setItem('uid', res.data[0].uid);

        }
        else if (res.data[0].did == 53) {
          this.rut.navigate(['/sidebar/students/students']);
          sessionStorage.setItem('islogin', 'true');
          sessionStorage.setItem('uid', res.data[0].uid);

        }
        else if (res.data[0].did == 51) {
          this.rut.navigate(['/sidebar/account/account']);
          sessionStorage.setItem('islogin', 'true');
          sessionStorage.setItem('uid', res.data[0].uid);

        }
        else {
          this.rut.navigate(['']);

        }
      } else {
        console.log('error');
      }
    })
  }

}
