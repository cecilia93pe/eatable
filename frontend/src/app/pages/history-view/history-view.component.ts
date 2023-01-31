import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css'],
})
export class HistoryViewComponent implements OnInit {
  hidden: boolean = false;
  total!: number;
  orderList: Array<any> = [];
  user: any = null;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private orderService: OrderService,
    private dishService: DishService
  ) {
    this.user = this.authService.currentUser;
  }

  ngOnInit() {
    this.total = this.cartService.getTotal();
    this.orderService.getAll(this.user._id).subscribe((res: any) => {
      const updateOrderList = res.map((order: any) => {
        const updatedOrder = { ...order };
        updatedOrder.items = [];
        updatedOrder.total = 0;

        order.items.map((dish: any) => {
          this.dishService.getDishById(dish._id).subscribe((res) => {
            updatedOrder.total += res.price * dish.quantity;
            updatedOrder.items.push({
              ...res,
              quantity: dish.quantity,
            });
          });
        });
        return updatedOrder;
      });
      this.orderList = [...updateOrderList];
    });
  }

  hide = () => {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  };
}
