import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Productservice } from 'src/app/product-pages/Products.service';


@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  SecProducts
  constructor(private product:Productservice){
    this.SecProducts = product.getsliderproduct();
  }

   
}
