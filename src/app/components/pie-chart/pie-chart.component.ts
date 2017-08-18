import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
type = 'pie';
data = {
  labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
  datasets: [{ 
        data: [2478,5267,734,784,433],
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
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
    },
    responsive: true,
    maintainAspectRatio: false
};

  constructor() { }

  ngOnInit() {
  }

}
