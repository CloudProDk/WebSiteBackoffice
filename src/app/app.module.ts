import { ReferenceListComponent } from './category/sub-category/references/reference-list/reference-list.component';
import { ReferenceEditComponent } from './category/sub-category/references/reference-edit/reference-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './category/sub-category/sub-category.component';
import { ReferenceComponent } from './category/sub-category/references/reference.component';
import { AzureLoginComponent } from './azure-login/azure-login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CategoryComponent,
    SubCategoryComponent,
    ReferenceComponent,
    AzureLoginComponent,
    ReferenceEditComponent,
    ReferenceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
