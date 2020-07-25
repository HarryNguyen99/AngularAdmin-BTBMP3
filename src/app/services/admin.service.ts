import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interface/user";
import {UserLogin} from "../interface/userLogin";

const adminUrl = 'http://localhost:8080/api/admin/crud-user/';
const loginUrl = 'http://localhost:8080/api/auth/signin'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) {
  }

  login(user: UserLogin): Observable<any>{
    return this.httpClient.post(loginUrl, user);
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(adminUrl + 'users');
  }
}
