import { Component, OnInit } from '@angular/core';
import {User} from "../../interface/user";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  private user: User;

  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.adminService.getUser(this.id)
    .subscribe(data => {
      console.log(data);
      this.user = data;
      console.log(this.user.roles);
    }, error => console.log(error));
  }

}
