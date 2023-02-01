import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from './../../services/dish.service';
import { CartService } from './../../services/cart.service';
import { Dish } from './../../models/dish.model';


@Component({
  selector: 'app-dish-detail-view',
  templateUrl: './dish-detail-view.component.html',
  styleUrls: ['./dish-detail-view.component.css']
})
export class DishDetailViewComponent implements OnInit {
  currentDish: Dish = {
    _id: "",
    name: "",
    price: 0,
    category: "",
    description: "",
    picture_url: "",
    quantity: 0,
    __v: 0,
  };
  dishId!: string | null;
  isAddedToCart!: boolean;
  cartLabel: string = this.isAddedToCart ? "Added to cart" : "Add to cart";

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dishId = params.get('id')
      if (this.dishId) {
        this.dishService.getDishById(this.dishId)
        .subscribe((data) =>{
          this.currentDish = data
          this.isAddedToCart = this.cartService.isItemAddedToCart(this.currentDish._id)
        }
        )
      }
    })
  }

  onClick(){
    this.cartService.addItemToCart(this.currentDish)
    console.log("agregado")
  }
}
