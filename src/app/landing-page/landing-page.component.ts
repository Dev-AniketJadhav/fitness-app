import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import SwiperCore, {  Pagination, Navigation, EffectCoverflow } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

}
