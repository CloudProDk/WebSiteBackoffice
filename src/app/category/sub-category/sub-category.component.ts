import { SubCategoryEditFormComponent } from './sub-category-edit-form/sub-category-edit-form.component';


import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryEditFormComponent } from '../category-edit-form/category-edit-form.component';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SubCategory } from 'src/app/models/sub.category.model';
import { SubCategoryService } from 'src/app/services/sub-category/sub-category.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})


export class SubCategoryComponent implements OnInit, OnDestroy {
  routeName: any;
  sub: any;
  listOfSubCategory: SubCategory[] = [];
  sortedList: SubCategory[] = [];
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private subCategoryService: SubCategoryService,  public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllSubCats();
    console.log(this.listOfSubCategory);
    this.subscription = this.activatedRoute.paramMap.subscribe(params => {
      this.sub = params.get('sub-category');

      this.sortedList = this.listOfSubCategory.filter(x => x.fkCategoryId === this.sub);
      console.log(this.sortedList);
    });

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }




  openDialog(hdr: string, dscrp: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';

    dialogConfig.data = {
      header: hdr,
      description: dscrp
    };

    const dialogRef = this.dialog.open(SubCategoryEditFormComponent, dialogConfig);
  }

  getAllSubCats() {
    this.subCategoryService.getAllSubCategories().subscribe(response => {
      this.listOfSubCategory = response;
      console.log(response);
    });
  }
}
