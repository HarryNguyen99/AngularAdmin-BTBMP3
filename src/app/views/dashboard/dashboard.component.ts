import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  logOut() {
    window.localStorage.clear();
    console.log("logout ok");
    this.router.navigateByUrl('/login');
  }

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

}
