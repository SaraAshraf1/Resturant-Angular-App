import { Injectable } from '@angular/core';
import { Item } from '../menu/item';
import { MessengerService } from '../messenger.Service';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItem: Cart;
  constructor(private messengerService: MessengerService) {
    this.cartItem = { total: 0, numInCart: 0, items: [] };
  }

  addToCart(newItem: Item): Cart {
    let isExist = false;
    for (let item of this.cartItem.items) {
      if (item.id === newItem.id) {
        item.quantity++;
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      this.cartItem.items.push({
        id: newItem.id,
        name: newItem.name,
        quantity: newItem.quantity + 1,
        price: newItem.price,
        image: newItem.image,
      });
    }
    this.calcTotal(newItem);
    return this.cartItem;
  }
  calcTotal(newItem: Item) {
    newItem.quantity++;
    this.cartItem.numInCart++;
    this.cartItem.total += newItem.price * newItem.quantity;
  }
  deleteItem(item): Cart {
    this.cartItem.total -= item.price * item.quantity;
    this.cartItem.numInCart -= item.quantity;
    item.quantity = 0;
    this.cartItem.items = this.cartItem.items.filter((i) => i !== item);
    return this.cartItem;
  }
  updateTotalMinus(item): Cart {
    this.cartItem.numInCart--;
    item.quantity--;
    this.cartItem.total -= item.price;
    return this.cartItem;
  }
  updateTotalPlus(item): Cart {
    this.cartItem.numInCart++;
    item.quantity++;
    this.cartItem.total += item.price;
    return this.cartItem;
  }
}
