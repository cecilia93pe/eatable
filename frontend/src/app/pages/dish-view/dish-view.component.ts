import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Dish } from 'src/app/models/dish.model';
import { DishService } from './../../services/dish.service';

@Component({
  selector: 'app-dish-view',
  templateUrl: './dish-view.component.html',
  styleUrls: ['./dish-view.component.css'],
})
export class DishViewComponent implements OnInit {
  showNavbar: boolean = true;
  search!: any;
  cartNumberShop: any;

  dishList: Dish[] = [];
  filteredDishes: Dish[] = [];
  categories: string[] = [
    'Italian',
    'Mexican',
    'Snacks',
    'Peruvian',
    'Argentinean',
  ];

  onChange() {
    this.filteredDishes = this.dishList.filter((dish: Dish) => {
      const regex = new RegExp(this.search.toLowerCase());
      return regex.test(dish.name.toLowerCase());
    });
    this.showNavbar = this.filteredDishes.length === this.dishList.length;
  }

  filterByCategory(category: string) {
    this.filteredDishes = this.dishList.filter(
      (dish: Dish) => category === dish.category
    );
  }

  constructor(private dishService: DishService) {}
  ngOnInit() {
    this.cartNumberShop = JSON.parse(localStorage.getItem('cart')!) || [];

    this.dishService.getDishes()?.subscribe({
      next: (res: Dish[]) => {
        this.dishList = res;
        this.filteredDishes = res;
      },
      error: () => {
        this.dishList = [];
      },
    });
  }
}
