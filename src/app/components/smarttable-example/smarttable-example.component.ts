import { Component, OnInit,OnChanges,Input } from '@angular/core';
import { LocalDataSource  } from 'ng2-smart-table';
@Component({
  selector: 'app-smarttable-example',
  templateUrl: './smarttable-example.component.html',
  styleUrls: ['./smarttable-example.component.css']
})
export class SmarttableExampleComponent implements OnInit,OnChanges {
  source: LocalDataSource;
  @Input() d:number;
  constructor() {
    alert('smart table');
    this.source = new LocalDataSource(this.data); // create the source
  }
  
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      }
    },
    mode:'external',
    actions:{
      columnTitle:'Actions',
      add:false,
      edit:false,
      delete:false
    },
    attr:{id:'dataGrid',class:"data-grid"}
  };
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },

    // ... list of items

    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
  onSearch(query: string = '') {
    this.d=10;
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false); 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
  ngOnInit() {
    alert('ngOnInit');
  }
  ngOnChanges(values){
    alert(JSON.stringify(values));
  }

}
