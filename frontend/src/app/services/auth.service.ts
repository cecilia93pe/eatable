import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUri = 'http://localhost:8000/api';

  currentUser: User = {
    _id: '',
    email: '',
    password: '',
    token: '',
    name: '',
    phone: '',
    address: '',
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.currentUser = JSON.parse(sessionStorage.getItem('user')!) || {};
    //localStorage.setItem('user', JSON.stringify(this.currentUser));
  }

  login(email: string, password: string) {
    this.http.post(`${this.apiUri}/login`, { email, password }).subscribe({
      next: (data: any) => {
        console.log(data, 'data')
        if (data.token) {
          sessionStorage.setItem('token', data.token);
          this.getUser(data.id).subscribe((user) => {
            console.log(user, 'user:::::::::::::::::');
            this.currentUser = user;
            console.log(this.currentUser);

            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('cartAddress', JSON.stringify(user.address));

            this.router.navigate(['/dish']);
          });
        } else {
          this.toastr.error(data);
        }
      },
      error: (err: any) => {
        console.log(err, 'error');
      },
    });
  }

  singUp(email: string, password: string) {
    console.log('sign up ');
    this.http.post(`${this.apiUri}/users`, { email, password }).subscribe({
      next: (data: any) => {
        this.login(email, password);
        /*if (data.token) {
          console.log(data);
          sessionStorage.setItem('token', data.token);
          this.router.navigate(['/dish']);
        }*/
      },
      error: (err: any) => {
        console.log(err.error);
      },
    });
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  updateData(data: any, id: string) {
    return this.http.put(`${this.apiUri}/profile/${id}`, data);
  }

  isLogged(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getUser(id: string) {
    return this.http.get<User>(`${this.apiUri}/profile/${id}`);
  }

  updateUser(name: string, phone: number, address: string) {
    return this.http.patch<User>(`${this.apiUri}/profile`, {
      name,
      phone,
      address,
    });
  }
}
