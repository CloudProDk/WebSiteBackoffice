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
  categoryCloudObject: Category = {imagePath: ' ', title: ' ', descriptions: ' '};
  ewCategoryCloudObject: Category = {imagePath: ' ', title: ' ', descriptions: ' '};

  constructor(
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<CategoryEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.categoryCloudObject.id = data.id,
      this.categoryCloudObject.imagePath = data.imagePath;
      this.categoryCloudObject.title = data.title;
      this.categoryCloudObject.descriptions = data.descriptions;
     }

  ngOnInit() {
  }

  gem() {
    console.log('jeg gemmer data nu.');
    this.categoryService.updateData(this.categoryCloudObject);
  }

}
