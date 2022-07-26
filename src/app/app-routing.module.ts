import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { PastActivityComponent } from './activity/past-activity/past-activity.component';
import { StartNewComponent } from './activity/start-new/start-new.component';
import { AuthGuard } from './auth.guard';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { canActivate,redirectUnauthorizedTo,redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectToLogIn=() => redirectUnauthorizedTo(['login'])
const redirectToHomePage=()=>redirectLoggedInTo(['home'])

const routes: Routes = [
  { path: 'home', component: LandingPageComponent, 
    ...canActivate(redirectToLogIn)},
  { path: 'login', component: LoginComponent,
...canActivate(redirectToHomePage) },
  { path: 'signup', component: SignupComponent },
  { path: 'activity', component: ActivityComponent, canActivate: [AuthGuard] },
  { path: 'past-activity', component: PastActivityComponent },
  { path: 'start-new', component: StartNewComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
