import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class TokenageService {

  constructor() { }

  signOut(): void {
    window.localStorage.clear();
  }
  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }
}
