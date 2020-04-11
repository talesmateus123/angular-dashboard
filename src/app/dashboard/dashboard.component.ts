import { Component, OnInit } from '@angular/core';


import { DataService } from './data.service';

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

  init(){

  }

}
