import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  getCartItems(){
    let dishes: Dish[] = []
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    return cartItems || dishes
  }

  addItemToCart(Item: Dish){
    console.log("AddItem")
    if (this.isItemAddedToCart(Item._id)){
      return
    }
    let cartItems = JSON.parse(localStorage.getItem("cart")!) || []
    cartItems.push({...Item, quantity: 1})
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }

  removeItemFromCart(id: String){
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    cartItems = cartItems.filter((item: Dish) => item._id !== id)
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }

  isItemAddedToCart(id: String){
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    return (cartItems?.filter((item: Dish) => item._id === id).length > 0)
  }

  updateCart(cart: Dish[]){
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  getTotal(){
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    return cartItems.reduce((acc: number, cur: Dish) => acc + (cur.price * (cur.quantity || 0)), 0)
  }
}
