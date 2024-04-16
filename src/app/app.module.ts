import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { NavBarComponent } from './fix-com/nav-bar/nav-bar.component';
import { FooterComponent } from './fix-com/footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstSectionComponent } from './main-page/first-section/first-section.component';
import { SecondSectionComponent } from './main-page/second-section/second-section.component';
import { ThirdSectionComponent } from './main-page/third-section/third-section.component';
import { FourthSectionComponent } from './main-page/fourth-section/fourth-section.component';
import { FifthSectionComponent } from './main-page/fifth-section/fifth-section.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductPagesComponent } from './product-pages/product-pages.component';
import { WalletComponent } from './wallet/wallet.component'; 

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatRadioModule } from '@angular/material/radio';
import { Productservice } from './product-pages/Products.service';
import { GenderpipePipe } from './product-page/genderpipe.pipe';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { OrderComponent } from './order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainPageComponent,
    FirstSectionComponent,
    PageNotFoundComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent,
    ProductPageComponent,
    ProductPagesComponent,
    WalletComponent,
    GenderpipePipe,
    LoginComponent,
    SignUpComponent,
    OrderComponent,
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    CarouselModule,
    MatRadioModule
  ],
  providers: [Productservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
