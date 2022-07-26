import { Component, ContentChild, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignedIn=false;
  showPassword=false
  @ViewChild('Loginform') Loginform:NgForm;
  @ContentChild(Input) input: Input;
  apiurl="https://angular-projects-73181-default-rtdb.firebaseio.com/"
  Login={
    email:'',
    password:'',
    
   }
   
  
  constructor(private http:HttpClient,
    public firebaseService:FirebaseService,
    private router:Router){
    
  }
  ngOnInit( ) {
   
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true;
    else
    this.isSignedIn=false;
  }
// async onSignup(email:string,password:string){
//   await this.firebaseService.signin(email,password)
//   if(this.firebaseService.isLoggedIn)
//   this.isSignedIn=true
// }

  onSubmit(Loginform:any){
    
    console.log(Loginform);
    //const{email,password}=this.Loginform.value;
    //this.firebaseService.signin(email,password)
   
    
    return this.http.post('https://angular-projects-73181-default-rtdb.firebaseio.com/post.json',Loginform.form.value).subscribe(data => {
     this.router.navigate(['/','activity'])
     console.log(data);
     
  })
    

   
    
  }
   getApiData(){
   
   }


   
}



