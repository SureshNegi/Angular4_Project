import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngprime-table-example',
  templateUrl: './ngprime-table-example.component.html',
  styleUrls: ['./ngprime-table-example.component.css']
})
export class NgprimeTableExampleComponent implements OnInit {

  constructor() { 
    alert('ng-prime table');
  }
  cars = [];
  d=10;
  ngOnInit() {
    alert('init ngprime');
    this.d=11;
    for (var i = 0; i < 10; i++) {
      this.cars.push({
        vin: i,
        year: '2018',
        brand: 'b1',
        color: 'red'
      })
    }
  }

  editComplete(){
    console.log("onEditComplete");
  }

}
