import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Productservice } from './Products.service';
import { Product } from './Product.models';
import { DataService } from '../data.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css'],
  // standalone: true,
  // imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
})
export class ProductPagesComponent implements OnInit {
  constructor(
    public _formBuilder: FormBuilder,
    public Productservice: Productservice,
    public service: DataService
  ) {}

  products: Array<Product>;
  NewProducts: Array<Product>;
  SecProducts: Array<Product>;
  Favorites:Array<Product>;
  ngOnInit(): void {
    this.products = this.Productservice.getproducts();
    this.NewProducts = this.products;
    this.SecProducts = this.products;
  }

  toppings = this._formBuilder.group({
    firstprice: false,
    secprice: false,
    thirdprice: false,
  });
  genderVE = this._formBuilder.group({
    man: false,
    woman: false,
    without: false,
  });

  CombinedArray: Array<Product>;

  genderValue: any=[]
  priceValue: any=[]
  ColorValue: any=[]



  filterWorkedB() {
    if (!this.manOption && !this.WomanOption && !this.noOneOption) {
      return false;
    } else {
      return true;
    }
  } 
   

  SameFounder(First:any, Sec:any ){
    this.CombinedArray = [...First , ...Sec ]
    this.SecProducts = this.CombinedArray.filter((obj, index) =>
       this.CombinedArray.slice(index + 1).some(
          (otherObj) =>
            otherObj.gender === obj.gender && otherObj.price === obj.price
        )

       );
  }

  FilterAll(){

    
    
  if((this.filterWorkedA() ==true) &&((this.filterWorkedB()==false)&&(this.filterWorkedC == false))){
      this.SecProducts = this.priceValue
  } else if( (this.filterWorkedB() ==true) &&((this.filterWorkedA()==false)&&(this.filterWorkedC == false))){
    this.SecProducts = this. genderValue
  }
  else if((this.filterWorkedC ==true) &&((this.filterWorkedA()==false)&&(this.filterWorkedB() == false))){
    this.SecProducts = this.ColorValue
  }
  else if((this.filterWorkedC ==false) &&((this.filterWorkedA()==true)&&(this.filterWorkedB() == true))){
    this.SameFounder(this.genderValue , this.priceValue)
  }
  else if((this.filterWorkedB() ==false) &&((this.filterWorkedC==true)&&(this.filterWorkedA() == true))){
    this.SameFounder(this.ColorValue , this.priceValue)

  }
  else if((this.filterWorkedA() ==false) &&((this.filterWorkedC ==true)&&(this.filterWorkedB() == true))){

    this.SameFounder(this.ColorValue , this.genderValue)

  }
  else if((this.filterWorkedA() ==true) &&(this.filterWorkedC ==true)&&(this.filterWorkedB() == true)){
    let first;
    let sec;
    let third ;
    this.CombinedArray = [...this.ColorValue, ...this.genderValue];
    first = this.CombinedArray.filter((obj, index) =>
      this.CombinedArray.slice(index + 1).some(
        (otherObj) =>
          otherObj.gender === obj.gender && otherObj.price === obj.price
      )
    );
    this.CombinedArray = [...this.ColorValue, ...this.priceValue];
    sec = this.CombinedArray.filter((obj, index) =>
      this.CombinedArray.slice(index + 1).some(
        (otherObj) =>
          otherObj.gender === obj.gender && otherObj.price === obj.price
      )
    );
    this.CombinedArray = [...sec,...first];
    third = this.CombinedArray.filter((obj, index) =>
      this.CombinedArray.slice(index + 1).some(
        (otherObj) =>
          otherObj.gender === obj.gender && otherObj.price === obj.price
      )
    );
    this.SecProducts = [...third]
  }

  }

  manOption: boolean = false;
  WomanOption: boolean = false;
  noOneOption: boolean = false;

  genderHandler(selectedCheckbox: string) {
    if (selectedCheckbox === 'woman') {
      this.WomanOption = !this.WomanOption;

      this.genderVE.patchValue({
        woman: true,
        man: false,
        without: false,
      });
      if (this.WomanOption === false) {
        this.genderVE.patchValue({ woman: false });
      }
    } else if (selectedCheckbox === 'man') {
      this.manOption = !this.manOption;
      this.genderVE.patchValue({
        woman: false,
        man: true,
        without: false,
      });

      if (this.manOption === false) {
        this.genderVE.patchValue({ man: false });
      }
    } else if (selectedCheckbox === 'without') {
      this.noOneOption = !this.noOneOption;
      this.genderVE.patchValue({
        woman: false,
        man: false,
        without: true,
      });

      if (this.noOneOption === false) {
        this.genderVE.patchValue({ without: false });
      }
    }
    if (selectedCheckbox == 'without') {
      this.genderValue = this.products;
      this.FilterAll();
      return;
    }
    this.genderValue = this.NewProducts.filter((value) => {
      let genderVal = value.gender == selectedCheckbox;
      this.FilterAll();
      return genderVal;
    });
    this.FilterAll();
  }

  firstOption: boolean = false;
  SecondOption: boolean = false;
  ThirdOption: boolean = false;
  filterWorkedA() {
    if (!this.firstOption && !this.SecondOption && !this.ThirdOption) {
      return false;
    } else {
      return true;
    }
  }
  ValueChangeHandler(selectedCheckbox: string, min: number, max: number) {
    // this.filterWorkedA = !this.filterWorkedA;
    if (selectedCheckbox === 'firstprice') {
      this.firstOption = !this.firstOption;

      this.toppings.patchValue({
        firstprice: true,
        secprice: false,
        thirdprice: false,
      });

      if (this.firstOption === false) {
        this.toppings.patchValue({ firstprice: false });
      }
    } else if (selectedCheckbox === 'secprice') {
      this.SecondOption = !this.SecondOption;

      this.toppings.patchValue({
        firstprice: false,
        secprice: true,
        thirdprice: false,
      });

      if (this.SecondOption === false) {
        this.toppings.patchValue({ secprice: false });
      }
    } else if (selectedCheckbox === 'thirdprice') {
      this.ThirdOption = !this.ThirdOption;

      this.toppings.patchValue({
        firstprice: false,
        secprice: false,
        thirdprice: true,
      });
      if (this.ThirdOption == false) {
        this.toppings.patchValue({ thirdprice: false });
      }
    }

    this.priceValue = this.NewProducts.filter((value) => {
      let other= value.price > min && value.price < max
      this.FilterAll();
      return other;
    });
    this.FilterAll();
    // this.CompleteValue();
  }

  filterWorkedC: boolean = false;
  Colorseter(Color: string) {
    this.filterWorkedC = !this.filterWorkedC;
    if (Color === 'all') {
      this.ColorValue = this.products ;
      this.FilterAll();
      return ;
    }
    this.ColorValue = this.NewProducts.filter((items) => {
      let other = items.color === Color;
      this.FilterAll();
      return other;
    });
    // this.CompleteValue();
    this.FilterAll();
  }

  displayedColumns: string[] = [];
  Like(id:number){
    this.products[id].favarite = !this.products[id].favarite
  }
  
  
  Selectfavarite(value:any){
    if(value == "favarite"){
      this.SecProducts = this.fav()
    }else if(value == "Top-Price"){
      // this.SecProducts = this.products
     this.Sortprice();
    }else{
      this.SecProducts = this.products
    }
  }
  
  fav(){
    let favi = new Array<Product>
    for(let i = 0; i<this.products.length ; i++)
   if(this.products[i].favarite == true) {
    favi.push(this.products[i]) 
   }
    return favi
  }

  Sortprice(){
    this.SecProducts.sort((a, b) => b.price - a.price);
  }
}
