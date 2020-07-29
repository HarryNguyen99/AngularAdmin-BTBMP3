import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {AuthServiceService} from "../../services/auth-service.service";
import {Statistic} from "../userlist/Statistic";
import * as Highcharts from "highcharts";
import {AdminService} from "../../services/admin.service";
import {Observable} from "rxjs";
import {User} from "../../interface/user";
import {HighchartsChartModule} from "highcharts-angular";

@NgModule({
  imports: [
    DashboardRoutingModule
  ],
  declarations: [ DashboardComponent ],
  providers: [AuthServiceService]
})
export class DashboardModule {
  title = 'myHighchart';

  constructor(private adminService: AdminService) { }

 /* userList: Observable<User[]>;*/

  ngOnInit() {
    this.getInformationServer();
    /*this.reloadData();*/
  }

  data: Statistic[] = [];

  getInformationServer(): any {
    this.adminService.getInformationStatistic().subscribe(
      result => {
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < result[i].length; j++) {
            if (j == 0) {
              this.data[i] = new Statistic();
              let formatDateStr = result[i][0].substr(0, 10);
              this.data[i].setName(formatDateStr);
            } else {
              this.data[i].data = [];
              this.data[i].data[0] = result[i][1];
            }
          }
        }
      }
    );
  }

  highcharts = null;
  chartOptions = {};

  check() {
    console.log(this.data);

    this.highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: "column"
      },
      title: {
        text: "Biểu Đồ Theo Dõi Số Lượng Người Đăng Kí Mới Theo Ngày"
      },
      xAxis:{
        categories:["Đơn Vị Theo Ngày"]
      },
      yAxis: {
        title:{
          text:"Số Lượng Người"
        }
      },
      series: this.data
    };
  }
}
