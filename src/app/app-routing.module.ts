import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { MasterComponent } from './master/master.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './register/login/login.component';
import { SignUpComponent } from './register/sign-up/sign-up.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
