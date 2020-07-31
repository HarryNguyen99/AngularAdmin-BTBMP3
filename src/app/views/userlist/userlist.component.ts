import {Component, OnInit} from '@angular/core';
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
  isBlock: boolean = false;
  id: number;
  username: string;
  status: boolean;
  rolesName: string;

  ngOnInit() {
    this.reloadData();
  }

  onSubmitButton(id: number, username: string, status: boolean, rolesName: string): void {
    this.id= id;
    this.username = username;
    this.status = status;
    this.rolesName = rolesName;
  }

  reloadData(): void {
    this.adminService.getAll().subscribe(
      result => {
        this.userList = result;
      }
    );
  }

  block(userId: number) {
    this.adminService.blockUser(userId).subscribe(
      result => {
        this.isBlock = true;
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  delele(userId: number) {
    this.adminService.deleteUser(userId).subscribe(
      result => {
        this.reloadData();
      },
      error => console.log(error)
    );
  }
}

