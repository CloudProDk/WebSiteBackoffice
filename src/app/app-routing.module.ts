
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './category/sub-category/sub-category.component';
import { ReferenceListComponent } from './category/sub-category/references/reference-list/reference-list.component';
import { ReferenceComponent } from './category/sub-category/references/reference.component';
import { ReferenceItemComponent } from './category/sub-category/references/reference-item/reference-item.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';




const routes: Routes = [


  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthenticationGuard] },
  { path: 'home', component: CategoryComponent},

  { path: 'references/:references', component: ReferenceComponent},
  { path: 'sub-category/:sub-category', component: SubCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
