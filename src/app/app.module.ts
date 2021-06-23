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
import { NgbDateRuParserFormatter } from './_helpers/ngb-date-ru-parser-formatter';
import { HttpClientModule } from '@angular/common/http';
import { PopUpService } from './_servieces/popup.service';
import {ErrorService} from './_servieces/error.service';
import {InfoService} from './_servieces/info.service';
import {SuccessService} from './_servieces/success.service';
import {ToastModule} from './views/toast/toast.module';

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
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
  ],
  providers: [
    NgbDateRuParserFormatter,
    PopUpService,
    ErrorService,
    InfoService,
    SuccessService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

