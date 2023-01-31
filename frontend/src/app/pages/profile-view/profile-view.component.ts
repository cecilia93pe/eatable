import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
})
export class ProfileViewComponent {
  hidden: boolean = false;
  constructor(private authService: AuthService) {}

  get user(): User {
    return this.authService.currentUser;
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

  update=()=>{

    console.log(this.user)

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
