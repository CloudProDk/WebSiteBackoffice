import { ReferenceListComponent } from './category/sub-category/references/reference-list/reference-list.component';
import { ReferenceEditComponent } from './category/sub-category/references/reference-edit/reference-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './category/sub-category/sub-category.component';
import { ReferenceComponent } from './category/sub-category/references/reference.component';
import { AzureLoginComponent } from './azure-login/azure-login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material/';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouteList } from './shared/routelist';
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { AuthenticationGuard } from 'microsoft-adal-angular6';


export function getAdalConfig() {
  return {
      tenant: '<YOUR TENANT>',
      clientId: '<YOUR CLIENT / APP ID>',
      redirectUri: window.location.origin,
      endpoints: {
        "https://localhost/Api/": "xxx-bae6-4760-b434-xxx",
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage / sessionStorage>',
    };
}


@NgModule({
  providers: [AuthenticationGuard, RouteList],
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    SubCategoryComponent,
    ReferenceComponent,
    AzureLoginComponent,
    ReferenceEditComponent,
    ReferenceListComponent,
    HeaderComponent,
    MainNavComponent,
    MsAdalAngular6Module
  ],
  imports: [
    MsAdalAngular6Module.forRoot(getAdalConfig),
    BrowserModule,
    AppRoutingModule,

    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,

    BrowserAnimationsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
