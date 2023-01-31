import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getAll = (userId: string) => {
    return this.http
      .get(`http://localhost:8000/api/orders/${userId}`)

  }

  createOrder = (data: any) => {
    return this.http
      .post(`http://localhost:8000/api/orders`, data)

  }

}
