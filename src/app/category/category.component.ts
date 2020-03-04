import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category/category.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryEditFormComponent } from './category-edit-form/category-edit-form.component';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  routeName: any;
  listOfCategories: Array<Category>;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) { }

  ngOnInit() {

    console.log('onInit category');
    this.listOfCategories = this.categoryService.listOfCategory();
    console.log(this.listOfCategories);
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


    const dialogRef = this.dialog.open(CategoryEditFormComponent, dialogConfig);
  }
}
