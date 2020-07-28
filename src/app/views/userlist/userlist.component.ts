import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {User} from "../../interface/user";
import {Observable} from "rxjs";
import {exitCodeFromResult} from "@angular/compiler-cli";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
})
export class UserlistComponent implements OnInit {

  constructor(private adminService: AdminService) {
  }

  userList: Observable<User[]>;
  isBlock: boolean = false;
  userId: number;
  username: string;
  userStatus: boolean;

  ngOnInit() {
    this.reloadData();
  }

  onSubmitDelete(userId: number, username: string): void {
    this.userId = userId;
    this.username  = username;
  }

  onSubmitBlock(userId: number, username: string, status: boolean): void {
    this.userId = userId;
    this.username = username;
    this.userStatus = status;
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
