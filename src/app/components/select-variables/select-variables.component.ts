import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-select-variables',
  templateUrl: './select-variables.component.html',
  styleUrls: ['./select-variables.component.scss']
})
export class SelectVariablesComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  pays: any[];

  data2: any[];

  view: any[] = [700, 400];
  view2: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  legend: boolean = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showXAxisLabel2 = true
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  yAxisLabel2: string = 'Year';
  xAxis: boolean = true;
  yAxis: boolean = true;
  colorScheme = {
    domain: ['#48ff00', '#ffee00', '#ff7b00', '#ff0000']
  };

  constructor(private dataS:DataService) { }

  ngOnInit(): void {

    this.dataS.getData().subscribe((data:any)=>{
      this.pays = data
    })

    this.dataS.getData2().subscribe((data2:any)=>{
      this.data2 = data2
    })


  }

  onSelect(event) {
    console.log(event);
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
