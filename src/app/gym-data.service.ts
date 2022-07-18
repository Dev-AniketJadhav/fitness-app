import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GymDataService {

  constructor(private http: HttpClient) {

   }
   getGymData() {
    return this.http.get('https://angular-projects-73181-default-rtdb.firebaseio.com/fitnessData.json   ')
   }
}
