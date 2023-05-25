import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

Highcharts = Highcharts
chartOptions = {
  
}
constructor(){
  this.chartOptions ={
    chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
      }
  },
  xAxis: {
      categories: ['Toyota', 'BMW', 'Volvo', 'Audi', 'Peugeot', 'Mercedes-Benz',
          'Volkswagen', 'Kia', 'Nissan']
  },
  yAxis: {
      title: {
          enabled: false
      }
  },
  tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: 'Cars sold: {point.y}'
  },
  title: {
      text: 'Sold passenger cars in Norway by brand, January 2021',
      align: 'left'
  },
  subtitle: {
      text: 'Source: ' +
          '<a href="https://ofv.no/registreringsstatistikk"' +
          'target="_blank">OFV</a>',
      align: 'left'
  },
  legend: {
      enabled: false
  },
  // for hiding credits
  credits:{
    enabled:false
  },
  plotOptions: {
      column: {
          depth: 25
      }
  },
  series: [{
      data: [1318, 1073, 1060, 813, 775, 745, 537, 416, 395],
      colorByPoint: true
  }]
  }

  // export highcharts
  HC_exporting(Highcharts);

}

}
