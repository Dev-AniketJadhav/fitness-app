import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
// import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-start-new',
  templateUrl: './start-new.component.html',
  styleUrls: ['./start-new.component.scss']
})
export class StartNewComponent implements OnInit {
  @ViewChild('TrainingData') TrainingData: NgForm
  progress: number = 0
  timer: any
  FitnessData: TrainingDataType = {
    Type: '',
    time: 0,
  }
  upperbody = [

    'Biceps',
    'triceps',
    'shoulder',
    'chest'
  ];
  lowerbody= [
    'upper legs',
    'lower legs',
    'idk legs',
    'no legs'
  ];
 //private db:AngularFirestore

  constructor(public dialog: MatDialog,
    private http: HttpClient,
    ) { }

  ngOnInit() {
    // this.db.collection('UserExeData').valueChanges().subscribe(result=>{
    //   console.log(result);
      
    // })
    console.log(this.progress);
  }

  onStartTraining() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 10
      if (this.progress == 100) {
        clearInterval(this.timer)
      }
    }, 1000)
  }

  onStop() {
    clearInterval(this.timer)
  }
  sendData(TrainingData: any) {
    console.log(this.TrainingData.value);
    return this.http.post('https://angular-projects-73181-default-rtdb.firebaseio.com/fitnessData.json', this.TrainingData.value,).subscribe((data) => {

      console.log(data)

    })

  }
}


export interface TrainingDataType {
  Type: string;
  time: number;
}