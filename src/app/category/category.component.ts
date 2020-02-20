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

  categoryObject:Category;
  isShow = true;
  editableFelt = "";
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  this.isShow = true;
  this.listOfCategories = this.categoryService.listOfCategory();
  this.categoryObject = this.listOfCategories[0];
  //console.log(this.categoryObject.header);
  }

  changeText() {
    this.editableFelt = this.categoryObject.description;
  }

  toggleDisplay () {
    this.isShow = !this.isShow;
  }

  gemCloudText() {
    this.categoryService.saveCloudData(this.editableFelt);
    console.log(this.editableFelt)
  }

}
