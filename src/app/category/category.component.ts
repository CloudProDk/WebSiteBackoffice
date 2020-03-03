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
  categoryCloudObject: Category;
  categoryHelperObject: Category = {imagePath: ' ', header: ' ', description: ''};

  constructor(private categoryService: CategoryService, public dialog: MatDialog) { }

  ngOnInit() {

    console.log('onInit category');
    this.listOfCategories = this.categoryService.listOfCategory();
    console.log(this.listOfCategories);
    this.categoryCloudObject = this.listOfCategories[0];
  // console.log(this.categoryObject.header);
  }

  // changeText() {
  //   this.editableFelt = this.categoryCloudObject.description;
  // }

/*   toggleDisplay() {
    this.isShow = !this.isShow;
  }
 */
/*   gemCloudText() {
    console.log(this.categoryHelperObject.description);
    this.categoryService.saveCloudData(this.categoryHelperObject.description);
    this.listOfCategories = this.categoryService.listOfCategory();
    this.categoryCloudObject = this.listOfCategories[0];
  } */

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';
    dialogConfig.data = {
      header: this.categoryCloudObject.header,
      description: this.categoryCloudObject.description
    };


    const dialogRef = this.dialog.open(CategoryEditFormComponent, dialogConfig);
  }

}
