import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HrDataService {

  constructor(private http: HttpClient) { }
  addposition(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addpos`, model);
  }
  getposition(): Promise<any> {
    return this.http.get(`${environment.base_URL}getpos`).toPromise();
  }
  getposbyid(id: number): Promise<any> {
    return this.http.get(`${environment.base_URL}getposbyid/${id}`).toPromise();
  }
  updatepos(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updatepos`, model);
  }
  deletepos(id: number): Observable<any> {
    return this.http.delete(`${environment.base_URL}deletepos/${id}`);
  }
  adddept(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}adddept`, model);
  }
  getdept(): Promise<any> {
    return this.http.get(`${environment.base_URL}getdept`).toPromise();
  }
  getdeptbyid(id: number): Promise<any> {
    return this.http.get(`${environment.base_URL}getdeptbyid/${id}`).toPromise();
  }
  updatedept(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updatedept`, model);
  }
  deletedept(id: number): Observable<any> {
    return this.http.delete(`${environment.base_URL}deletedept/${id}`);
  }

  addemp(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addemp`, model);
  }
  getemp(): Promise<any> {
    return this.http.get(`${environment.base_URL}getemp`).toPromise();
  }
  postFile(fileToUpload: File): Observable<any> {
    const endpoint = environment.base_URL + 'upload';
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData)
      .pipe(map(i => { return i }));
  }
  getempbyid(id: number): Promise<any> {
    return this.http.get(`${environment.base_URL}getempbyid/${id}`).toPromise();
  }
  updateemp(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updateemp`, model);
  }
  deleteemp(id: number): Observable<any> {
    return this.http.delete(`${environment.base_URL}deleteemp/${id}`);
  }
  islogin() {
    if (sessionStorage.getItem('islogin')) {
      return true;
    }
    return false;
  }
  addcourse(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addcourse`, model);
  }
  getcourses(): Promise<any> {
    return this.http.get(`${environment.base_URL}getcourses`).toPromise();
  }
  getcoursebyid(id: number): Promise<any> {
    return this.http.get(`${environment.base_URL}getcoursebyid,${id}`).toPromise();
  }
  updatecourse(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updatecoures`, model);
  }
  deletecourse(id: number): Observable<any> {
    return this.http.delete(`${environment.base_URL}deletecourse/${id}`);
  }
}
