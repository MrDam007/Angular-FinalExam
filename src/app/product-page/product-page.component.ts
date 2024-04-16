import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-pages/Product.models';
import { Productservice } from '../product-pages/Products.service';
import { TataService } from '../tata.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  constructor(private router: ActivatedRoute, private servise: Productservice, private tata: TataService) { }
  id: any
  Name: string
  gender: string
  img: string
  price: number
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id")!
    this.Name = this.products[this.id - 1].name
    this.gender = this.products[this.id - 1].gender
    this.img = this.products[this.id - 1].src
    this.price = this.products[this.id - 1].price
  }
  public products: Product[] = this.servise.getproducts();

  addToCart() {
    const product = {
      id: this.id,
      name: this.Name,
      gender: this.gender,
      img: this.img,
      price: this.price,
      count:1,
    };
    this.tata.addToCart(product);
    console.log(product);
  } // NeW


}
