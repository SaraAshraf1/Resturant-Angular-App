import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
import { MessengerService } from 'src/app/messenger.Service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() productItem: Item;

  constructor(private messengerService: MessengerService) {}
  updateCart() {
    this.messengerService.sendMsg(this.productItem);
  }
  ngOnInit(): void {}
}
