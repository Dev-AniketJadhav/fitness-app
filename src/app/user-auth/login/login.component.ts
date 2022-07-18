import { Component, ContentChild, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword=false
  @ViewChild('Loginform') Loginform:NgForm;
  @ContentChild(Input) input: Input;
  apiurl="https://angular-projects-73181-default-rtdb.firebaseio.com/"
  Login={
    email:'',
    password:'',
    
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



