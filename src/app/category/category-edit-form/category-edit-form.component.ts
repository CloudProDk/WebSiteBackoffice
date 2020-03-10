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
  categoryCloudObject: Category = {imagePath: ' ', header: ' ', description: ' '};
  /* newCategoryCloudObject: Category = {imagePath: ' ', header: ' ', description: ' '}; */

  constructor(
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<CategoryEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.categoryCloudObject.header = data.header;
      this.categoryCloudObject.description = data.description;
     }

  ngOnInit() {
  }

  gem() {
    console.log('jeg gemmer data nu.');
    this.categoryService.updateData(this.categoryCloudObject);
  }

}
