import { Component, OnInit } from '@angular/core';
import {AdminService} from "../services/admin.service";
import {Router} from "@angular/router";
import {Statistic} from "../views/userlist/Statistic";
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-statistic-month',
  templateUrl: './statistic-month.component.html',
  styleUrls: ['./statistic-month.component.css']
})
export class StatisticMonthComponent implements OnInit {

  title = 'myHighchart';

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getInformationServer();
  }

  data: Statistic[] = [];

  getInformationServer(): any {
    this.adminService.getInformationStatisticByMonth().subscribe(
      result => {
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < result[i].length; j++) {
            if (j == 0) {
              this.data[i] = new Statistic();
              let formatDateStr = result[i][0].substr(0, 7);
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

  enableChart() {
    console.log(this.data);

    this.highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: "column"
      },
      title: {
        text: "Biểu Đồ Theo Dõi Số Lượng Người Đăng Kí Mới Theo Tháng"
      },
      xAxis:{
        categories:["Đơn Vị Theo Tháng"]
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
