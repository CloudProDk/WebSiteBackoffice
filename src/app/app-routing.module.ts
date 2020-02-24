
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './category/sub-category/sub-category.component';
import { ReferenceListComponent } from './category/sub-category/references/reference-list/reference-list.component';
import { ReferenceComponent } from './category/sub-category/references/reference.component';
import { ReferenceItemComponent } from './category/sub-category/references/reference-item/reference-item.component';




const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent},
  { path: 'sub-category', component: SubCategoryComponent},
  {path: 'reference-list', component: ReferenceListComponent},
  {path: 'references', component: ReferenceComponent},
  {path: 'reference-item', component: ReferenceItemComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
