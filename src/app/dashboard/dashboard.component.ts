import { Component, OnInit } from '@angular/core';


import { DataService } from './data.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {7
  private data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        this.data = data;
        this.init();
      }
    );
  }

  /**
   * Initialize the Google Chart API with one second delay, that permits Angular CLI integration.
   * @returns void
   */
  init(): void{
    if(typeof(google) !== undefined){
      google.charts.load('current', {'packages':['corechart']});
    
      setTimeout(() => {
        // As soon as it loads, call the method displayCharts.
        google.charts.setOnLoadCallback(this.displayCharts());
      }, 1000);

    }
  }

  /**
   * This method is responsible by call all methods of Google Chart API, rendering charts with Google Chart API.
   * @returns void
   */
  displayCharts(): void{
    this.displayPieChart();
    this.display3dPieChart();
    this.displayDonutChart();
    this.displayBarChart();
    this.displayLineChart();
    this.displayColumnChart();
  }

  /**
   * This method is responsible by display the Pie Chart.
   * @returns void
   */
  displayPieChart(){
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();

    chart.draw(this.getDataTable(), options);
  }

  /**
   * This method is responsible by display the 3D Pie Chart.
   * @returns void
   */
  display3dPieChart(){
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();
    options['is3d'] = true;
    chart.draw(this.getDataTable(), options);
  }

  /**
   * This method is responsible by display the donut Chart.
   * @returns void
   */
  displayDonutChart(){
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();
    options['pieHole'] = 0.4;
    chart.draw(this.getDataTable(), options);
  }

  /**
   * This method is responsible by display the bar Chart.
   * @returns void
   */
  displayBarChart(){
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);
    const options = this.getOptions();
    options['is3d'] = true;
    chart.draw(this.getDataTable(), options);
  }

  /**
   * This method is responsible by display the line Chart.
   * @returns void
   */
  displayLineChart(){
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);
    const options = this.getOptions();
    options['is3d'] = true;
    chart.draw(this.getDataTable(), options);
  }

  /**
   * This method is responsible by display the bar column Chart.
   * @returns void
   */
  displayColumnChart(){
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);
    const options = this.getOptions();
    options['is3d'] = true;
    chart.draw(this.getDataTable(), options);
  }

  /**
   * Instantiates a new google DataTable object, charging the chart structure and chart data 
   * @returns any
   */
  getDataTable(): any{
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Month');
    data.addColumn('number', 'Quantity');
    data.addRows(this.data);
    
    return data;
  }

  /**
   * Returns all chart options, as well as, title, subtitle and the chart size.
   * @returns any
   */
  getOptions(): any{
    return {
      'title': 'Amount of records in the first half',
      'width': 400,
      'height': 300
    };
  }

}
