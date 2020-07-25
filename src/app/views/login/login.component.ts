import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import {Router} from "@angular/router";
import {UserLogin} from "../../interface/userLogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmitLogin(): void {
    const userLogin: UserLogin = this.loginForm.value;
    this.adminService.login(userLogin).subscribe(
      result => {
        localStorage.removeItem('token');
        localStorage.setItem('token', result.token);
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(result));
        // alert("Admin Login Successfully");
        console.log("admin ok")
        this.router.navigateByUrl('/dashboard');
      }, error => this.message = 'Wrong username or password!'
    );
  }
}
