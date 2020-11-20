import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/menu/item';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Item;
  @Output() returnedCartItem = new EventEmitter<Cart>();

  constructor(private cartService: CartService) {}
  remove() {
    this.returnedCartItem.emit(this.cartService.deleteItem(this.cartItem));
  }
  increment() {
    this.returnedCartItem.emit(this.cartService.updateTotalPlus(this.cartItem));
  }
  decrement() {
    if (this.cartItem.quantity > 1) {
      this.returnedCartItem.emit(
        this.cartService.updateTotalMinus(this.cartItem)
      );
    }
  }
  ngOnInit(): void {}
}
