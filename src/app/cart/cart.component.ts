import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../menu/item';
import { MessengerService } from '../messenger.Service';
import { Cart } from './cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  /*cartItems: Item[] = [];

@Output()cartTotal=new EventEmitter<number>();
@Output()numberOfItems=new EventEmitter<number>();
total=0;*/

  numOfItems = 0;
  total = 0;
  cartItem: Cart = { total: 0, numInCart: 0, items: [] };
  @Output() cartTemp = new EventEmitter<Cart>();
  constructor(
    public cartService: CartService,
    private messengerService: MessengerService
  ) {}

  ngOnInit(): void {
    this.messengerService.getMsg().subscribe((newItem: Item) => {
      this.cartItem = this.cartService.addToCart(newItem);
      this.cartTemp.emit(this.cartItem);
    });
  }
  setUpdatedCartItems(returnedCart) {
    this.cartItem = returnedCart;
    this.cartTemp.emit(this.cartItem);
  }
}
