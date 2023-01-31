import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-view',
  templateUrl: './loading-view.component.html',
  styleUrls: ['./loading-view.component.css']
})
export class LoadingViewComponent {

  constructor(
    private router: Router
  ) {
    setTimeout(() => {
      this.router.navigate(['/dish'])
    }, 2000);
  }

}
