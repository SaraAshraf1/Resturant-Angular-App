import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu/menu.service';
import { Item } from 'src/app/menu/item';
import { Cart } from '../cart/cart';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: Item[] = [];
  numberOfItems: number = 0;
  total: number = 0;
  constructor(
    private menuServise: MenuService,
    public cartService: CartService
  ) {}
  setUpdatedCartItems(returnedCart: Cart) {
    this.total = returnedCart.total;
    this.numberOfItems = returnedCart.numInCart;
  }
  ngOnInit(): void {
    this.items = this.menuServise.getItems();
  }
}
