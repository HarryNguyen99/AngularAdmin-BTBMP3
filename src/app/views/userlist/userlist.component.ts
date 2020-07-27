import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {User} from "../../interface/user";
import {Observable} from "rxjs";
import {exitCodeFromResult} from "@angular/compiler-cli";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
})
export class UserlistComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  userList: Observable<User[]>;
  isBlock : boolean = false;

  ngOnInit() {
   /* this.adminService.getAll().subscribe(
      result => {
        console.log("userlist ts run");
        this.userList = result;
      }, error => {
        alert("Cannot get user list!");
      }
    )*/
    this.reloadData();
  }

  onSubmitDelete(userId: number): void {
    this.adminService.deleteUser(userId).subscribe(
    result => {
      /*console.log(result);*/
      this.reloadData();
    },
      error => console.log(error)
    );
  }

  onSubmitBlock(userId: number) {
    this.adminService.blockUser(userId).subscribe(
      result => {
        this.isBlock = true;
      },
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
