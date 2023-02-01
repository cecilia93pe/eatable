import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';

import { OrderService } from './../../services/order.service';
import { DishService } from './../../services/dish.service';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css']
})

export class HistoryViewComponent implements OnInit {
  hidden: boolean = false;
  total!: number
  orderList: Array<any> = []
  user: any = {}

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private dishService: DishService
    ) {
    this.user = JSON.parse(sessionStorage.getItem('user')!) || {};
  }

  ngOnInit(){
    this.total = this.cartService.getTotal()
    console.log('hol')
    this.orderService.getAll(this.user._id)?.subscribe((res: any) => {
      console.log('orderService')
      const updateOrderList = res.map((order: any) => {
        const updatedOrder = {...order}
        updatedOrder.items = []
        updatedOrder.total = 0

        order.items.map((dish: any) => {
          this.dishService.getDishById(dish._id)?.subscribe((res) => {
            updatedOrder.total += res.price * dish.quantity
            updatedOrder.items.push({
              ...res,
              quantity: dish.quantity
            })
          })
        })
        return updatedOrder
      })
      this.orderList = [...updateOrderList]
    })

  }

  hide = () => {
    if (this.hidden) {
      this.hidden = false
    } else {
      this.hidden= true
    }
  }

}

