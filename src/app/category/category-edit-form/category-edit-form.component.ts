import { CategoryService } from './../../services/category/category.service';
import { Category } from 'src/app/models/category.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-category-edit-form',
  templateUrl: './category-edit-form.component.html',
  styleUrls: ['./category-edit-form.component.scss']
})
export class CategoryEditFormComponent implements OnInit {
  categoryCloudObject: Category = {id: null , imagePath: ' ', title: ' ', descriptions: ' '};
  newCategoryCloudObject: Category = {id: null , imagePath: ' ', title: ' ', descriptions: ' '};

  constructor(
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<CategoryEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.categoryCloudObject.id = data.id,
      this.categoryCloudObject.imagePath = data.imagePath;
      this.categoryCloudObject.title = data.title;
      this.categoryCloudObject.descriptions = data.descriptions;
      this.newCategoryCloudObject.id = data.id,
      this.newCategoryCloudObject.imagePath = data.imagePath;
      this.newCategoryCloudObject.title = data.title;
      this.newCategoryCloudObject.descriptions = data.descriptions;
     }

  ngOnInit() {
    // this.newCategoryCloudObject = this.categoryCloudObject;
    console.log('onInit before');
    console.log(this.newCategoryCloudObject);
    console.log('onInit after');
  }

  gem() {
    console.log('the object to save:');
    console.log(this.newCategoryCloudObject);
    console.log('jeg gemmer data nu.');
    this.categoryService.updateData(this.newCategoryCloudObject);
    this.dialogRef.close();
  }

  fortryd() {
    this.dialogRef.close();
  }
}
