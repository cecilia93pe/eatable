import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';

import { AuthService } from './../../services/auth.service';
import { OrderService } from './../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css'],
})
export class CheckoutViewComponent implements OnInit {
  total!: number;
  isEditable: boolean = false;
  user: any = {};
  cartAddress: string = '';
  cartList: Array<any> = [];
  userStorage: any = null;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.userStorage = JSON.parse(sessionStorage.getItem('user')!) || {};
    this.authService.getUser(this.userStorage._id)?.subscribe((res: any) => {
      console.log(res);
      this.user = res;
    });
    this.cartAddress = sessionStorage.getItem('cartAddress')!;
    this.cartList = JSON.parse(localStorage.getItem('cart')!);
  }

  ngOnInit(){
    this.total = this.cartService?.getTotal();
  }

  handleClickChange = () => {
    this.isEditable = !this.isEditable;
    if (this.isEditable) {
      console.log(this.user);
      if (this.user.name && this.user.phone) {
        sessionStorage.setItem('cartAddress', this.cartAddress);
      } else {
        this.router.navigate(['profile']);
      }
    } else {
      this.authService
        .updateData(this.user, this.userStorage._id)?.subscribe(() => {
          this.authService.getUser(this.userStorage._id).subscribe((json) => {
            this.user = json;
          });
        });
    }
    //event.target.attributes['contenteditable'].value = true
  }

  handleClickOrder = () => {
    const sendData = {
      delivery_address: this.user.address,
      items: this.cartList,
      user_id: this.user._id
    }
    if (this.user.address && this.cartList.length > 0) {
      this.orderService.createOrder(sendData)?.subscribe((res: any) => {
        console.log(res)
      })
      this.router.navigate(['history'])
    } else {
      alert('Ingrese sus datos')
    }
  }
}
