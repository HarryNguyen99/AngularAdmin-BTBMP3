import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  constructor(private router: Router) {
  }
  logOut() {
    window.localStorage.clear();
    console.log("logout ok");
    this.router.navigateByUrl('/login');
  }

}
