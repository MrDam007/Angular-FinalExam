import { Component, OnInit } from '@angular/core';
import { Productservice } from '../product-pages/Products.service';
import { Product } from '../product-pages/Product.models';
import { DataService } from '../data.service';
import { AuthService } from '../auth/auth.service';
import { ShoppingCartItemModule } from '../shared/module/shopping-cart-item-module';
import { TataService } from '../tata.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  id: number[];
  user: any;
  password: any;
  price: any;

  items: ShoppingCartItemModule[] = [
    {
      id: 1,
      Count: 1,
      image:
        'assets/img/lebron-19-basketball-shoe-5dpw6F-removebg-preview 1.png',
      Name: ' کفش نایک مدل ایر فورس',
      price: 999,
      color: 'آبی',
    },
    {
      id: 2,
      Count: 2,
      image:
        'assets/img/lebron-19-basketball-shoe-5dpw6F-removebg-preview 1 (2).png',
      Name: ' کفش نایک مدل رانینگ',
      price: 850,
      color: 'چندرنگ',
    },
  ];
  cartItems: any[]; // NeW

  addToCart(item: any) {
    const product = {
      id: item.id,
      Name: item.Name,
      gender: item.gender,
      img: item.img,
      price: item.price,
      count: 1,
    };

    this.tata.addToCart(product);
  } // NeW

  deleteCart(id: number) {
    this.tata.deleteCart(id);
    this.refresh();

  }
  add(id: number) {
    this.tata.add(id);
    this.refresh();
    
  }
  sub(id: number) {
    this.tata.sub(id);
    this.refresh();

  }

  ondeleteEvent($cartitemid: number) {
    const index = this.cartItems.findIndex((item) => item.id === $cartitemid);
    this.tata.cartItems.splice(index, 1);
    this.refresh();
  }
  countupdatedEvent($event: ShoppingCartItemModule) {
    const index = this.cartItems.findIndex((item) => item.id === $event.id);
    this.tata.cartItems[index] = $event;
    this.refresh();
  }
  totalprice: number = 0;

  public refresh() {
    // let sumprice:number = 0;

    this.totalprice = 0;
    this.cartItems.forEach((item) => {
      const price: number = item.price;
      this.totalprice += price * (item.count ?? 0);
    });
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
  initcart() {
    this.items = [
      {
        id: 1,
        Count: 1,
        image:
          'assets/img/lebron-19-basketball-shoe-5dpw6F-removebg-preview 1.png',
        Name: ' کفش نایک مدل ایر فورس',
        price: 980000,
        color: 'آبی',
      },

      {
        id: 2,
        Count: 2,
        image:
          'assets/img/lebron-19-basketball-shoe-5dpw6F-removebg-preview 1 (2).png',
        Name: ' کفش نایک مدل رانینگ',
        price: 1200000,
        color: 'چندرنگ',
      },
    ];
  }
  ngOnInit(): void {
    this.cartItems = this.tata.getCartItems(); // NeW

    this.initfromlocalstorage();
  }
  private initfromlocalstorage() {
    var data = localStorage.getItem('cart');
    if (data) {
      this.items = JSON.parse(data);
      this.refresh();
    }
  }
  constructor(
    public service: DataService,
    private auth: AuthService,
    private tata: TataService
  ) {
    this.id = service.ids;
    this.user = auth.getUser().email;
    this.password = auth.getUser().userId;
  }
}
