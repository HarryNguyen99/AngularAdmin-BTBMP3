import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
// @ts-ignore
import {UserlistComponent} from "./views/userlist/userlist.component";
import {LoginComponent} from "./views/login/login.component";
import {AuthServiceService} from "./services/auth-service.service";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivateChild: [AuthServiceService],
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'user-list',
        canActivate: [AuthServiceService],
        component: UserlistComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
