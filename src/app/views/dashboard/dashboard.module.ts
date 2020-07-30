import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {AuthServiceService} from "../../services/auth-service.service";

@NgModule({
  imports: [
    DashboardRoutingModule
  ],
  declarations: [ DashboardComponent ],
  providers: [AuthServiceService]
})
export class DashboardModule {
  title = 'myHighchart';

  constructor() { }
}
