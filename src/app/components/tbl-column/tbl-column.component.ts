import {Component, Input,OnInit} from '@angular/core';
import {MyTableComponent} from '../my-table/my-table.component'

@Component({
  selector: 'column',
  templateUrl: './tbl-column.component.html',
  styleUrls: ['./tbl-column.component.css']
})
export class TblColumnComponent implements OnInit {

  @Input() value;
	@Input() header;
 
	constructor(table: MyTableComponent) {
    	   table.addColumn(this)
  	}

  ngOnInit() {
  }

}
