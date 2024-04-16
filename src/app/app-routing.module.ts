import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProductPagesComponent } from './product-pages/product-pages.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard, PermissionService } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

const routes: Routes = [
  {path: "" , component : MainPageComponent},
  {path: "login" , component : LoginComponent},
  {path: "main" , component : MainPageComponent},
  {path: "product-pages/product-pages/:id",component : ProductPageComponent, canActivate:[AuthGuard]}  ,
  {path: "signup",component : SignUpComponent},
  {path: "wallet" , component : WalletComponent,  canActivate:[AuthGuard]},
  {path: "product-pages" , component : ProductPagesComponent,  canActivate:[AuthGuard]},
  {path: "**" , component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [PermissionService]
})
export class AppRoutingModule { }
