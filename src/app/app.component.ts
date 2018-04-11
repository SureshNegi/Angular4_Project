import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cities=[];
  constructor(){
    //alert('app-component')
  }
  ngOnInit() {
    //alert("init app-component");
    this.cities.push({id:1,city:'Delhi',country:'India'});
    
    this.cities.push({id:2,city:'Dehradun',country:'India'});
  }
}
