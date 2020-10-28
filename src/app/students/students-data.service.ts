import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable({
  providedIn: "root",
})
export class StudentsDataService {
  constructor(private http: HttpClient) {}
  addstudent(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addstudent`, model);
  }
  getstudent(): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getstudent77`).catch(this.errorHandler)
      .toPromise()
      ;
  }
  getcstudent(): Promise<any> {
    return this.http.get(`${environment.base_URL}getcstudent`).toPromise();
  }
  getbstudent(): Promise<any> {
    return this.http.get(`${environment.base_URL}getbstudent`).toPromise();
  }
  getostudent(): Promise<any> {
    return this.http.get(`${environment.base_URL}getostudent`).toPromise();
  }
  getstudentbyid(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getstudentbyid/${id}`)
      .toPromise();
  }
  updatestudent(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updatestudent`, model);
  }
  deletestudent(id: number): Observable<any> {
    return this.http.delete(`${environment.base_URL}deletestudent/${id}`);
  }
  postFile(fileToUpload: File): Observable<any> {
    const endpoint = environment.base_URL + "uploadstudent";
    const formData: FormData = new FormData();
    formData.append("image", fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData).pipe(
      map((i) => {
        return i;
      })
    );
  }

  getcbatchdetail(): Promise<any> {
    return this.http.get(`${environment.base_URL}getclubbatch`).toPromise();
  }
  getbbatchdetail(): Promise<any> {
    return this.http.get(`${environment.base_URL}getgenbatch`).toPromise();
  }
  getobatchdetail(): Promise<any> {
    return this.http.get(`${environment.base_URL}getotobatch`).toPromise();
  }
  getbatchdetail(): Promise<any> {
    return this.http.get(`${environment.base_URL}getbatchdetail`).toPromise();
  }
  mbatchadd(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}mbatchadd`, model);
  }
  getmbatch(): Promise<any> {
    return this.http.get(`${environment.base_URL}getmbatch`).toPromise();
  }
  getmbatchbyid(id: number): Promise<any> {
    return this.http
      .get(`${environment.base_URL}getmbatchbyid/${id}`)
      .toPromise();
  }
  updatembatch(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updatembatch`, model);
  }
  deletembatch(id: number): Observable<any> {
    return this.http.delete(`${environment.base_URL}deletembatch/${id}`);
  }
  clubcounttody(): Promise<any> {
    return this.http.get(`${environment.base_URL}clubcounttody`).toPromise();
  }
  deletems(id: number): Observable<any> {
    return this.http.delete(`${environment.base_URL}deletems/${id}`);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error");
  }
}
