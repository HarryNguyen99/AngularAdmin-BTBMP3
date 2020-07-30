import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserLogin} from "../interface/userLogin";



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminUrl = 'http://localhost:8080/api/admin/crud-user/users';
  private loginUrl = 'http://localhost:8080/api/auth/admin/signin';

  private statisticURL = 'http://localhost:8080/api/admin/statistic/users-date';

  constructor(private httpClient: HttpClient) {
  }

  login(user: UserLogin): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}`, user);
  }

  getAll(): Observable<any> {
    console.log("admin service run");
    return this.httpClient.get(`http://localhost:8080/api/admin/crud-user/users`);
  }

  deleteUser(userId: number): Observable<any> {
    return this.httpClient.delete(`${this.adminUrl}/${userId}`);
  }

  blockUser(userId: number): Observable<any> {
    return this.httpClient.put( `${this.adminUrl}/${userId}`, userId);
  }

  getInformationStatistic(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/api/admin/statistic/users-date`);
  }

  getInformationStatisticByMonth(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/api/admin/statistic/users-month`);
  }

  getUser(id: number): Observable<any> {
    return this.httpClient.get(`${this.adminUrl}/${id}`);
  }
}
