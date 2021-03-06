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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReferenceItemComponent } from './category/sub-category/references/reference-item/reference-item.component';
import { CategoryEditFormComponent } from './category/category-edit-form/category-edit-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SubCategoryEditFormComponent } from './category/sub-category/sub-category-edit-form/sub-category-edit-form.component';
import { HeadlineComponent } from './headline/headline.component';
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

export function getAdalConfig() {
  return {
      tenant: 'ad143624-dfe4-427b-81d5-e4a098b91a9f',
    clientId: '972644db-3d2d-43bc-aa01-5f7dcb942e55',
    extraQueryParameter: 'nux=1',
    redirectUri: window.location.origin,
    endpoints: {
      'https://www.xense-Beta.azurewebsites.net/': '972644db-3d2d-43bc-aa01-5f7dcb942e55'
    },
    navigateToLoginRequestUrl: false,
    cacheLocation: '<localStorage / sessionStorage>',
    };
}


@NgModule({
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
    ReferenceItemComponent,
    CategoryEditFormComponent,
    SubCategoryEditFormComponent,
    HeadlineComponent
  ],
  entryComponents: [
    ReferenceEditComponent,
    MainNavComponent,
    ReferenceItemComponent,
    CategoryEditFormComponent,
    SubCategoryEditFormComponent,
    HeadlineComponent
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
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule


  ],
  providers: [AuthenticationGuard, RouteList, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],

  bootstrap: [AppComponent]
})
export class AppModule { }
