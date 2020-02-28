
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './category/sub-category/sub-category.component';
import { ReferenceListComponent } from './category/sub-category/references/reference-list/reference-list.component';
import { ReferenceComponent } from './category/sub-category/references/reference.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CategoryComponent},
  { path: 'sub-category/:sub-category', component: SubCategoryComponent},
    // children: [
    //   { path: 'cloud', component: SubCategoryComponent},
    //   { path: 'web', component: SubCategoryComponent},
    //   { path: 'mobile', component: SubCategoryComponent},
    //   { path: 'support', component: SubCategoryComponent}
    // ]},
  { path: 'reference-list', component: ReferenceListComponent},
  { path: 'references', component: ReferenceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
