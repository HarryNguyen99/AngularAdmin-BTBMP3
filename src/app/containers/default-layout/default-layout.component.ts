import {Component} from '@angular/core';

import { navItems } from '../../_nav';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  minimized = false;
  public navItems = [...navItems];

  constructor(private router: Router) {
  }

  toggleMinimize(e) {
    this.minimized = e;
  }

  logOut() {
    window.localStorage.clear();
    console.log("logout ok");
    this.router.navigateByUrl('/login');
  }
}
