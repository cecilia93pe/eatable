import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guards/home.guard';
import { LoginGuard } from './guards/login.guard';
import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { DishDetailViewComponent } from './pages/dish-detail-view/dish-detail-view.component';
import { DishViewComponent } from './pages/dish-view/dish-view.component';
import { HistoryViewComponent } from './pages/history-view/history-view.component';
import { LoadingViewComponent } from './pages/loading-view/loading-view.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/loading'
  },
  {
    path: 'login',
    component: LoginViewComponent,
    canActivate: [HomeGuard]
  },
  {
    path: 'dish',
    component: DishViewComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'dish/:id',
    component: DishDetailViewComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'checkout',
    component: CheckoutViewComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'history',
    component: HistoryViewComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'profile',
    component: ProfileViewComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'cart',
    component: CartViewComponent,
    canActivate: [LoginGuard]
  },
  { path: 'loading', component: LoadingViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
