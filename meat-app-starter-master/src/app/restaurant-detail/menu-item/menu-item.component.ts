import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { menuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem : menuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
