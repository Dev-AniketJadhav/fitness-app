import { Component, ContentChild, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { emailVerified } from '@angular/fire/auth-guard';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignedIn=false;
  showPassword=false
  @ViewChild('Loginform') Loginform:any;
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
  get email(){
    return this.Loginform.get('email')
  }

  get password(){
    return this.Loginform.get('password')
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
   
    const {email,password}=this.Loginform.value
     this.http.post('https://angular-projects-73181-default-rtdb.firebaseio.com/post.json',this.Loginform.value).subscribe(data => {
     
     console.log(data);
   
  })
  this.firebaseService.login(email,password).subscribe(()=>{
    this.router.navigate(['/home'])
  })
   

   
    
  }
   getApiData(){
   
   }


   
}



