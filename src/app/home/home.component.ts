import { Component, OnInit, HostListener} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@HostListener("window:scroll", ['$event'])
export class HomeComponent implements OnInit {

  
  constructor() { }

  customOptions: OwlOptions = {
    autoplay: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 300,
    items: 1,
    dots: true,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  };
   slides = [
      {id: 1,title: "Washing & Detailing", subTitle: "Keep your Car Newer", text:"Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac", btn: "Explore More" },
      {id: 2,title: "Washing & Detailing", subTitle: "Quality service for you",text:"Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales", btn: "Explore More" },
      {id: 3,title: "Washing & Detailing", subTitle: "Exterior & Interior Washing",text:"Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam", btn: "Explore More" }
    ];
  
  ngOnInit(): void {
    console.log('scroll',window.scroll())
  }

  
}
