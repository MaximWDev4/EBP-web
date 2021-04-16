import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { TopMenuComponent } from './views/top-menu/top-menu.component';
import { SideMenuComponent } from './views/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { Page404Component } from './views/page404/page404.component';
import { NavItemComponent } from './views/top-menu/nav-item/nav-item.component';
import { SideMenuItemComponent } from './views/side-menu/side-menu-item/side-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    TopMenuComponent,
    SideMenuComponent,
    HomeLayoutComponent,
    Page404Component,
    NavItemComponent,
    SideMenuItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

