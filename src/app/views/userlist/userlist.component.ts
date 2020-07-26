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

  onSubmitDelete(userId: number) {
    this.adminService.deleteUser(userId).subscribe(
/*     result => { console.log()},
      error => console.log(error)*/
    );
  }

/*  onSubmitBlock(userId: number) {
    this.adminService.blockUser(userId).subscribe(
      result => {},
      error => console.log(error)
    );
  }*/
}
