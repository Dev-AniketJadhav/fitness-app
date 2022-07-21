import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GymDataService } from 'src/app/gym-data.service';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {
  url: 'https://angular-projects-73181-default-rtdb.firebaseio.com'
  activity = [];
  dtOptions: DataTables.Settings = {};
  persons: Person[];

  constructor(private http: HttpClient,
    private gymdata: GymDataService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        dataTablesParameters.minNumber = dataTablesParameters.start + 1;
        dataTablesParameters.maxNumber =
          dataTablesParameters.start + dataTablesParameters.length;
        console.log(
          dataTablesParameters.minNumber,
          dataTablesParameters.maxNumber
        );
        console.log('All Params', dataTablesParameters);
        this.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters,
            {}
          )
          .subscribe(resp => {
            this.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
  }

}
