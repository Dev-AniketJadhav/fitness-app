import { Component, ViewChild } from '@angular/core';
import { trigger,state,style,animate,transition, animation, query,} from '@angular/animations';
import {  fader, } from './router-animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    fader,
  
  ]
})
export class AppComponent {
  title = 'fitness-app';
 isOpen=true;
 toggle(){
  this.isOpen=!this.isOpen;
 }

 prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

}
//  const fader =
// trigger('routeAnimations',[
//   transition('* <=> *',[
//     query(':enter , :leave',[
//       style({
//         position:'absolute',
//         left:0,
//         width:'100%',
//         opacity:'0',
//         transform:'scale(0) translateY(100%)'
//       }),
      
//     ]),
//     query(':enter',[
//       animate('600ms ease ',
//       style({opacity:1,transform:'scale(1) translateY(0)'}))
//     ])
//   ])
// ])