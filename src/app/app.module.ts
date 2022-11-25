import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { IndianComponent } from './indian/indian.component';
import { ChineseComponent } from './chinese/chinese.component';

const myRoute:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"indian",
    component:IndianComponent
  },
  {
    path:"chinese",
    component:ChineseComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    IndianComponent,
    ChineseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
