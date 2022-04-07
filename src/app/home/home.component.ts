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
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 300,
    items: 1,
    dots: true,
    loop: true,
    nav : false,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  };

  carouselPartners: OwlOptions = {
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 300,
    margin:10,
    items: 4,
    dots: false,
    loop: true,
    nav : false,
    responsive: {
      600: {items:4}
    }
  };
  
  ngOnInit(): void {
  }

  
}
