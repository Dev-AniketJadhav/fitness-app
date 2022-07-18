import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import{FormsModule,NG_VALIDATORS } from '@angular/forms';
import { ActivityComponent } from './activity/activity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NewActivityComponent } from './activity/new-activity/new-activity.component';
import { PastActivityComponent } from './activity/past-activity/past-activity.component';
import { StartNewComponent } from './activity/start-new/start-new.component';
import { DataTablesModule } from "angular-datatables";
import { GymDataService } from './gym-data.service';
import { SwiperModule } from "swiper/angular";
@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    LoginComponent,
    SignupComponent,
    LandingPageComponent,
    ActivityComponent,
    NewActivityComponent,
    PastActivityComponent,
    StartNewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    DataTablesModule,
    SwiperModule,
    

  ],
  providers: [GymDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
