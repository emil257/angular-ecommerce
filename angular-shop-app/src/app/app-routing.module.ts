import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { CheckoutPageComponent } from './views/checkout-page/checkout-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { RegisterPageComponent } from './views/register-page/register-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'profile/login', component: LoginPageComponent },
  { path: 'profile/register', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
