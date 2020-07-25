import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {User} from "../../interface/user";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
})
export class UserlistComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  userList: User[];

  ngOnInit(): void {
    this.adminService.getAll().subscribe(
      (result) => {
        this.userList = result;
      }, error => {
        alert("Cannot get user list!");
      }
    )
  }

  // ngOnInit() {
  // }

}
