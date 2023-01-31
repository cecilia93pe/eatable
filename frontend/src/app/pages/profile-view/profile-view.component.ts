import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
})
export class ProfileViewComponent {
  hidden: boolean = false;
  user: any = {};
  userStorage: any = null;

  profileForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(null),
    address: new FormControl(''),
  });

  constructor(private authService: AuthService) {
    this.userStorage = JSON.parse(sessionStorage.getItem('user')!) || {};

    this.authService.getUser(this.userStorage._id).subscribe((res) => {
      console.log(res);
      this.user = res;
    });
  }

  hide = () => {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  };

  logout = () => {
    this.authService.logout();
  };

  update = () => {
    const send = {
      name: this.profileForm.value.name,
      phone: Number(this.profileForm.value.phone),
      address: this.profileForm.value.address,
      email: this.userStorage.email,
      password: this.userStorage.password,
    };
    console.log(send, 'send');
    this.authService.updateData(send, this.userStorage._id).subscribe((res) => {
      this.authService.getUser(this.userStorage._id).subscribe((json) => {
        this.user = json;
        console.log(json);
      });
      this.hidden = false;
    });
    // this.authService.getUser()

    // console.log(sessionStorage)

    //   const data = {
    //   name: 'John Doe',
    //   address: 'asdasdasdas',
    //   phone: '930232945'
    // };

    // this.authService.updateData(data);

    // console.log(this.user)
    // this.authService.getToken()
    // this.authService.update(
    //   "joseph",
    //   "930232945",
    //   "asdasdasd",
    //   this.user.token)
  };

  // ngOnInit(){
  //   this.userService.getUserData().subscribe({
  //     next:(res: User)=>{
  //       this.currentUser= res;
  //       console.log(this.currentUser)
  //     },
  //     error: () => {
  //       console.error()

  //     }
  //   })
  // }
}
