import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {User} from "../../interface/user";
import {Observable} from "rxjs";
import {Statistic} from "./Statistic";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
})
export class UserlistComponent implements OnInit {
  constructor(private adminService: AdminService) { }

  userList: Observable<User[]>;

  ngOnInit() {
    this.reloadData();
  }

  onSubmitDelete(userId: number): void {
    this.adminService.deleteUser(userId).subscribe(
    result => {
      this.reloadData();
    },
      error => console.log(error)
    );
  }

  onSubmitBlock(userId: number) {
    this.adminService.blockUser(userId).subscribe(
      result => {},
      error => console.log(error)
    );
  }

  reloadData(): void {
    this.adminService.getAll().subscribe(
      result => {
        console.log("testing");
        this.userList = result;
      }
    );
  }

}

