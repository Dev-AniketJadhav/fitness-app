import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


type NewType = any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('Loginform') Loginform:NgForm;

  apiurl="https://angular-projects-73181-default-rtdb.firebaseio.com/"
  Login={
    email:'',
    password:'',
    
   }
   
   headers = new HttpHeaders({'Content-Type': 'application/'})

   options={
    headers:this.headers
   }

  constructor(private http:HttpClient){
    
  }
  ngOnInit( ): void {
   
    
  }
  onSubmit(Loginform:any){
    console.log(Loginform);
    
   
    
    return this.http.post('https://angular-projects-73181-default-rtdb.firebaseio.com/post.json',Loginform.form.value).subscribe(data => {
   
     console.log(data);
     
  })
    

   
    
  }
   getApiData(){
   
   }
}


