import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(private http: HttpClient) { }
  adduser(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}adduser`, model);
  }
  getalluser(): Promise<any> {
    return this.http.get(`${environment.base_URL}getalluser`).toPromise();
  }
  getuserbyid(id: number): Promise<any> {
    return this.http.get(`${environment.base_URL}getuserbyid/${id}`).toPromise();
  }
  updateuser(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}updateuser`, model);
  }
  deleteuser(id: number): Observable<any> {
    return this.http.delete(`${environment.base_URL}deleteuser/${id}`);
  }
  getempdet(): Promise<any> {
    return this.http.get(`${environment.base_URL}getempdetail`).toPromise();
  }
  getallemp(): Promise<any> {
    return this.http.get(`${environment.base_URL}countallemp`).toPromise();
  }
  getallstud(): Promise<any> {
    return this.http.get(`${environment.base_URL}countallstd`).toPromise();
  }
  getallclub(): Promise<any> {
    return this.http.get(`${environment.base_URL}countclub`).toPromise();
  }
  getallgen(): Promise<any> {
    return this.http.get(`${environment.base_URL}countgen`).toPromise();
  }
  getalloto(): Promise<any> {
    return this.http.get(`${environment.base_URL}countoto`).toPromise();
  }
}
