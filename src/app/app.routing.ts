import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';
import {UserlistComponent} from "./views/userlist/userlist.component";
import {LoginComponent} from "./views/login/login.component";
import {AuthServiceService} from "./services/auth-service.service";
import {UserDetailsComponent} from "./views/user-details/user-details.component";
import {StatisticComponent} from "./statistic/statistic.component";
import {StatisticMonthComponent} from "./statistic-month/statistic-month.component";

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
      },
      {
        path: 'user/:id',
        canActivate: [AuthServiceService],
        component: UserDetailsComponent
      },
      {
        path: 'chart-date',
        canActivate: [AuthServiceService],
        component: StatisticComponent
      },
      {
        path: 'chart-month',
        canActivate: [AuthServiceService],
        component: StatisticMonthComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
