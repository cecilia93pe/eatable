import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { Dish } from './../../models/dish.model';
@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css'],
})
export class CartViewComponent implements OnInit {
  noSearch: boolean = true;

  cartList: Dish[] = [];
  total!: number;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartList = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
    console.log(this.cartList);
    if (this.cartList.length === 0) {
      this.noSearch = false;
    } else {
      this.noSearch = true;
    }
  }

  reduceQuantity(dish: Dish) {
    if (dish.quantity) {
      dish.quantity--;
      if (dish.quantity > 0) {
        this.cartService.updateCart(this.cartList);
      } else {
        this.cartService.removeItemFromCart(dish._id);
        this.cartList = this.cartService.getCartItems();
      }
      this.total = this.cartService.getTotal();
    }
  }

  incrementQuantity(dish: Dish) {
    if (dish.quantity) {
      dish.quantity++;
    }
    this.cartService.updateCart(this.cartList);
    this.total = this.cartService.getTotal();
  }
}
