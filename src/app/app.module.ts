import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {NgxPaginationModule} from "ngx-pagination";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import {AppComponent} from './app.component';

// Import containers
import {DefaultLayoutComponent} from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent,
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import {AppRoutingModule} from './app.routing';
import {UserlistComponent} from './views/userlist/userlist.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './views/login/login.component';
import {JwtInterceptor} from "./interceptor/jwt.interceptor";
import {LogoutComponent} from './views/logout/logout.component';
import {AuthServiceService} from "./services/auth-service.service";
import {Ng2GoogleChartsModule} from "ng2-google-charts";
import {HighchartsChartComponent} from "highcharts-angular";
import { StatisticComponent } from './statistic/statistic.component';
import { UserDetailsComponent } from './views/user-details/user-details.component';
import { StatisticMonthComponent } from './statistic-month/statistic-month.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2GoogleChartsModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    UserlistComponent,
    LoginComponent,
    LogoutComponent,
    HighchartsChartComponent,
    StatisticComponent,
    UserDetailsComponent,
    StatisticMonthComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
