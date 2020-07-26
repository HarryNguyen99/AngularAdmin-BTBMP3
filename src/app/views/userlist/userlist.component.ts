import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {User} from "../../interface/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
})
export class UserlistComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  private userList: Observable<User[]>;

  ngOnInit(): void {
    this.adminService.getAll().subscribe(
      result => {
        console.log("ala");
        this.userList = result;
      }, error => {
        alert("Cannot get user list!");
      }
    )

  }

  // onSubmitGetAll() {
  //   this.adminService.getAll().subscribe(
  //     (result) => {
  //       console.log("ala");
  //       this.userList = result;
  //     }, error => {
  //       alert("Cannot get user list!");
  //     }
  //   )
  // }

  // ngOnInit() {
  // }

}
