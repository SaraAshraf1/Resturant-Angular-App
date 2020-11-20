import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
   items: Item[] = [
    { id: 1, name: 'Hawaiian Pizza',ingredients:"cheese / Olive Oil / Salt",description:"There are many variations of passages of Lorem Ipsum available",quantity:0,price:19.50,image:"assets/images/filter-7.png" },
    { id: 2, name: 'Chicken Pizza', ingredients:"cheese / Olive Oil / Salt",description:"There are many variations of passages of Lorem Ipsum available",quantity:0,price:17.00,image:"assets/images/filter-6.png" },
    { id: 3, name: 'Margherita Pizza', ingredients:"cheese / Olive Oil / Salt",description:"There are many variations of passages of Lorem Ipsum available",quantity:0,price:22.50,image:"assets/images/filter-1.png" },
    { id: 4, name: 'Ham Pizza' ,ingredients:"cheese / Olive Oil / Salt",description:"There are many variations of passages of Lorem Ipsum available",quantity:0,price:16.50,image:"assets/images/filter-7.png" },
    { id: 5, name: 'Pepperoni Pizza' ,ingredients:"cheese / Olive Oil / Salt",description:"There are many variations of passages of Lorem Ipsum available",quantity:0,price:20.00,image:"assets/images/filter-3.png" },
    { id: 6, name: 'Classic Pizza' ,ingredients:"cheese / Olive Oil / Salt",description:"There are many variations of passages of Lorem Ipsum available",quantity:0,price:13.50,image:"assets/images/filter-4.png" },
    { id: 7, name: 'Oriental Pizza' ,ingredients:"cheese / Olive Oil / Salt",description:"There are many variations of passages of Lorem Ipsum available",quantity:0,price:15.50,image:"assets/images/filter-5.png" },
    { id: 8, name: 'Barbecue Pizza', ingredients:"cheese / Olive Oil / Salt",description:"There are many variations of passages of Lorem Ipsum available",quantity:0,price:19.50,image:"assets/images/filter-6.png" },

  ];
  getItems():Item[]{
  return this.items;
  }
}
