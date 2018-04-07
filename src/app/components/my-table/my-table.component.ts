//http://4dev.tech/2016/02/tutorial-angular-2-datatable-with-sorting-filtering-and-resizable-columns/
//http://4dev.tech/2016/09/creating-an-angular2-datatable-from-scratch/

import { Http, Response } from '@angular/http';
import { Injectable, Component, Input } from '@angular/core';
import { TblColumnComponent } from '../tbl-column/tbl-column.component';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {

  constructor() { }

  @Input() dataset;
  columns: TblColumnComponent[] = [];

  addColumn(column) {
    this.columns.push(column);
  }
}
