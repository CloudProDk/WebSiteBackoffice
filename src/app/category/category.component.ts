import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  listOfCategories: Array<Category>;
  categoryCloudObject: Category;
  categoryHelperObject: Category = {imagePath: ' ', header: ' ', description: ''};
  isShow = true;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  this.listOfCategories = this.categoryService.listOfCategory();
  this.categoryCloudObject = this.listOfCategories[0];
  // console.log(this.categoryObject.header);
  }

  // changeText() {
  //   this.editableFelt = this.categoryCloudObject.description;
  // }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  gemCloudText() {
    console.log(this.categoryHelperObject.description);
    this.categoryService.saveCloudData(this.categoryHelperObject.description);
    this.listOfCategories = this.categoryService.listOfCategory();
    this.categoryCloudObject = this.listOfCategories[0];
  }

}
