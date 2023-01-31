import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(
    private http: HttpClient
    ) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('http://localhost:8000/api/products');
  }

  getDishById(id: string){
    return this.http.get<Dish>(`http://localhost:8000/api/products/${id}`)
  }
}
