import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { LoadingViewComponent } from './pages/loading-view/loading-view.component';
import { DishViewComponent } from './pages/dish-view/dish-view.component';
import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { HistoryViewComponent } from './pages/history-view/history-view.component';
import { DishDetailViewComponent } from './pages/dish-detail-view/dish-detail-view.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DishesInterceptorService } from './interceptors/dishes-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoryCardComponent } from './pages/history-card/history-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ProfileViewComponent,
    NavbarComponent,
    DishCardComponent,
    LoginViewComponent,
    LoadingViewComponent,
    DishViewComponent,
    CartViewComponent,
    CheckoutViewComponent,
    HistoryViewComponent,
    DishDetailViewComponent,
    HistoryCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DishesInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
