import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) {}

  // getUserData(): Observable<User> {
  //   let user = this.authService.getCurrentUser()
  //   return this.http.get<User>(`http://localhost:8000/api/profile/${user._id})}`);
  // }

  getUserData(): Observable<User> {
    return this.http.get<User>(`http://localhost:8000/api/profile/63d2f168c13d1a64e5c6b90f`);
  }
}
