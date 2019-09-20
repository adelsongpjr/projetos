import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() items : CartItem[]

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove      = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  EmitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item)
  }

  EmitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }

  EmitRemove(item: CartItem){
    this.remove.emit(item)
    console.log(this.items.length)
  }
}
