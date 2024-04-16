import { Injectable } from '@angular/core';
import { count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TataService {

  constructor() { }

  badge() {

    return true;
  } // NeW

  ////////////////////////////////////////
  ////////////////////////////////////////

  public cartItems: any[] = []; // NeW
  add(int :number){
  let x=  this.cartItems.find(x=>x.id ==int);
  x.count ++
  }
  sub(int :number){
    let x = this.cartItems.find((x) => x.id == int);
 
    x.count--;
    if(x.count<=0){
      this.deleteCart(int);
    }
  }

  deleteCart(int:number){
    const index1 = this.cartItems.findIndex(item=>item.id ==int)
    this.cartItems.splice(index1,1)
  }
  addToCart(product: any) {
    for (const value of this.cartItems) {
      if (product.id == value.id) {
          value.count += product.count
          console.log(value)
        return; 
      }
    }
    this.cartItems.push(product);
    console.log(this.cartItems)
  } // NeW

  getCartItems() {
    return this.cartItems;
  } // NeW
}
