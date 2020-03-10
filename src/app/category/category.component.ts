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
  listOfCategories: Category[];

  constructor(private categoryService: CategoryService, public dialog: MatDialog) { }

  ngOnInit() {

    console.log('onInit category');
    this.fetchCategories();
    /* console.log('after fetchCats');
    console.log(this.listOfCategories);
    console.log('før xxxxxx'); */
    /* console.log(this.listOfCategories[0].id); */
    console.log('efter xxxxxx');
  }

  openDialog(idd: number, imagePathh: string, ttl: string, dscrp: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';
    dialogConfig.data = {
      id: idd,
      imagePath: imagePathh,
      title: ttl,
      descriptions: dscrp
    };


    const dialogRef = this.dialog.open(CategoryEditFormComponent, dialogConfig);
  }

  fetchCategories() {
    this.categoryService.getAllCategories().subscribe(response => {
      console.log('my fetch response:');
      console.log(response);
      console.log(response[0].id);
      this.listOfCategories = response;
      console.log(this.listOfCategories);
    });
  }
}
