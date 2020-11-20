import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ReserveTableComponent } from './reserve-table/reserve-table.component';
import { LoginComponent } from './register/login/login.component';
import { StoryComponent } from './story/story.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { SignUpComponent } from './register/sign-up/sign-up.component';
import { RegisterComponent } from './register/register.component';
import { MasterComponent } from './master/master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ReserveTableComponent,
    LoginComponent,
    StoryComponent,
    SpecialityComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    CartComponent,
    CartItemComponent,
    SignUpComponent,
    RegisterComponent,
    MasterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
