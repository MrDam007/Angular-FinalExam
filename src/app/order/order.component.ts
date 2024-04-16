import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartItemModule } from '../shared/module/shopping-cart-item-module';
// import * as moment from 'moment-jalaali';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})

export class OrderComponent implements OnInit {
  @Input() item: ShoppingCartItemModule;
  price: 0;
  color: '';
  cartItems: any[] = [];
  products: any[] = [];
  @Output() ondelete = new EventEmitter<number>();
  // @Output() ondelete: EventEmitter<number> = new EventEmitter<number>;
  @Output() onrefresh = new EventEmitter();
  @Output() countupdated = new EventEmitter<ShoppingCartItemModule>();
  constructor() {}
  ngOnInit(): void {}
  add() {
    const currentcount: number = this.item.Count ?? 0;
    if (this.item != null) {
      this.item.Count = currentcount + 1;
    }
    this.countupdated.emit(this.item);
    this.onrefresh.emit();
  }
  sub() {
    const currentcount: number = this.item.Count ?? 0;
    if (this.item != null) {
      this.item.Count = currentcount > 0 ? currentcount - 1 : 0;
    }
    this.countupdated.emit(this.item);
    this.onrefresh.emit();
  }
  del(itemid?: number) {
    this.ondelete.emit(itemid);
    this.onrefresh.emit();
  }
   storedItems = localStorage.getItem('boughtItems');
    if (storedItems:any) {
      this.cartItems = JSON.parse(storedItems);
    }
  
   
    
}
