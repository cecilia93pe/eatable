import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent {
  buttonItem: string = 'Login';

  loginForm = new FormGroup({
    email: new FormControl('testino@mail.com'),
    password: new FormControl('letmein'),
  });

  constructor(private authService: AuthService) {}

  buttonLog(event: any) {
    console.log(event.target.innerText)
    this.buttonItem = event.target.innerText;
  }

  buttonSing(event: any) {
    console.log(event.target.innerText)
    this.buttonItem = event.target.innerText;
  }

  onLogin(): void {
    console.log(this.loginForm.value);
    this.authService.login(
      this.loginForm.value.email!,
      this.loginForm.value.password!
    );
  }

  onSingUp(): void {
    console.log(this.loginForm.value);
    this.authService.singUp(
      this.loginForm.value.email!,
      this.loginForm.value.password!
    );
  }
}
