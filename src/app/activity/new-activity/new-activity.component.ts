import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { GymDataService } from 'src/app/gym-data.service';
import{UserData} from '../user-data'

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {
  url:'https://angular-projects-73181-default-rtdb.firebaseio.com'
     public activity=[];  
  dtOptions: DataTables.Settings={};
  constructor(private http:HttpClient,
              private gymdata:GymDataService ) {}

  ngOnInit(): void {
    this.gymdata.getGymData().subscribe((response:any)=>{
      console.log(response);
      this.activity = response
      console.log(this.activity);
      
    })
    
    this.dtOptions={
      serverSide: true,
      processing: true,
     // ajax: 'https://angular-projects-73181-default-rtdb.firebaseio.com/fitnessData/data.json',
     ajax:'https://angular-projects-73181-default-rtdb.firebaseio.com/fitnessData.json',
      columns: [{
        title:'Type',
         data:'FitnessData.Type'
      },
      {
        title:'Time',
        data:'time',
        type: 'date'
      }],
      
      
    };
   
      
  }
  gymDataTable(response){
    console.log(response);
    
  }
}
