import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interface/user";
import {UserLogin} from "../interface/userLogin";



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminUrl = 'http://172.20.10.3:8080/api/admin/crud-user/';
  private loginUrl = 'http://172.20.10.3:8080/api/auth/admin/signin';

  constructor(private httpClient: HttpClient) {
  }

  login(user: UserLogin): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}`, user);
  }

  getAll(): Observable<any> {
    console.log("alala");
    return this.httpClient.get(`http://172.20.10.3:8080/api/admin/crud-user/users`);
  }
}
