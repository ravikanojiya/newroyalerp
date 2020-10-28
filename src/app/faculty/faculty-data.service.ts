import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Info } from "../info";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
@Injectable({
  providedIn: "root",
})
export class FacultyDataService {
  constructor(private http: HttpClient) {}
  addbatch(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addbatch`, model);
  }
  getbatches(): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getbatches`)
      .toPromise()
      .catch(this.errorHandler);
  }
  getbatchebyid(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getbatchbyid/${id}`)
      .toPromise()
      .catch(this.errorHandler);
  }
  updatebatch(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updatebatch`, model);
  }
  deletebatch(id: number): Observable<any> {
    return this.http.delete(`${environment.base_URL}deletebatch/${id}`);
  }
  getfacstudent(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getfacstudent/${id}`)
      .toPromise();
  }
  countstudent(id: number): Promise<any> {
    return this.http.get(`${environment.base_URL}countstud/${id}`).toPromise();
  }
  getbatchstudent(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getbatchstudent/${id}`)
      .toPromise();
  }
  countstudents(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}countstudents/${id}`)
      .toPromise();
  }
  confirmstudent(id: number): Promise<any> {
    return this.http
      .put(`${environment.base_URL}confirmstudent`, id)
      .toPromise();
  }
  getfacbatchbyid(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getfacbatchbyid/${id}`)
      .toPromise();
  }
  addsession(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addsession`, model);
  }
  getsessionsbyid(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getsessionsbyid/${id}`)
      .toPromise();
  }
  contfacbatch(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}contfacbatch/${id}`)
      .toPromise();
  }
  getbatchstudentfac(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getbatchstudentfac/${id}`)
      .toPromise();
  }
  sendEmail(obj): Observable<Info> {
    return this.http.post<Info>(`${environment.base_URL}sendFormData`, obj);
  }
  getemailstudent(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getemailstudent/${id}`)
      .toPromise();
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
