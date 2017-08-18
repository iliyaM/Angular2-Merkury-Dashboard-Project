import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
type = 'line';
data = {
  labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
  datasets: [{ 
        data: [6000,2000,4000,3000,6000,181,3500,5921,783,2478],
        label: "Angular",
        borderColor: "#0F1B35",
        fill: true
      }
    ]
};
options = {
 title: {
      display: true,
      text: 'Angular2 chartJs'
    }
};
  constructor() { }

  ngOnInit() {}

}
