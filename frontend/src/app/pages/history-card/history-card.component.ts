import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})

export class HistoryCardComponent implements OnInit {

  hidden: boolean = false;
  itemList: any = []
  //total!: number
  @Input() date: any = null
  //@Input() itemList: any = []
  @Input() address: string = ''
  @Input() total: any  = null
  @Input() order: any = null

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {
    console.log(this.order, 'order')
  }
  get user(): User {
    return this.authService.currentUser;
  }
  ngOnInit(){
    console.log(this.order, 'order')
    this.itemList = this.order.items
    //this.total = this.cartService.getTotal()
  }

  hide = () => {
    if (this.hidden) {
      this.hidden = false
    } else {
      this.hidden= true
    }
  }

}
