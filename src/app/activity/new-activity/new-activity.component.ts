import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {

  dtOptions: DataTables.Settings={};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions={
      ajax:'https://angular-projects-73181-default-rtdb.firebaseio.com/fitnessData.json',
      columns: [{
        title:'name',
        data:'value.name'
      }]
    };
  }

}
