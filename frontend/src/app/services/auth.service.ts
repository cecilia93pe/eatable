import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

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

  constructor(private router: Router, private http: HttpClient) {
    this.currentUser = JSON.parse(sessionStorage.getItem('user')!) || {};
    //localStorage.setItem('user', JSON.stringify(this.currentUser));
  }

  login(email: string, password: string) {
    this.http.post(`${this.apiUri}/login`, { email, password }).subscribe({
      next: (data: any) => {
        if (data.token) {
          this.getUser(data.token, data.id).subscribe((user) => {
            this.currentUser = user;
            console.log(this.currentUser);

            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('cartAddress', JSON.stringify(user.address));

            this.router.navigate(['/dish']);
          });
        }
      },
      error: (err: any) => {
        console.log(err.error);
      },
    });
  }

  singUp(email: string, password: string) {
    console.log('sign up ');
    this.http.post(`${this.apiUri}/users`, { email, password }).subscribe({
      next: (data: any) => {
        if (data.token) {
          console.log(data);
          sessionStorage.setItem('token', data.token);
          this.router.navigate(['/dish']);
        }
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

  updateData(data: any) {
    const token = sessionStorage.getItem('token');
    if (token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: token,
        }),
      };

      this.http
        .put(
          `${this.apiUri}/profile/${this.currentUser._id}`,
          data,
          httpOptions
        )
        .subscribe({
          next: (res: any) => {
            console.log(res);
          },
          error: (err: any) => {
            console.log(err.error);
          },
        });
    }
  }

  isLogged(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getUser(token: string, id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };

    return this.http.get<User>(`${this.apiUri}/profile/${id}`, httpOptions);
  }
}
