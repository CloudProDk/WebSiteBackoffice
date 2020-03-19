import { Component, OnInit, Inject } from '@angular/core';
import { SubCategory } from 'src/app/models/sub.category.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubCategoryService } from 'src/app/services/sub-category/sub-category.service';

@Component({
  selector: 'app-sub-category-edit-form',
  templateUrl: './sub-category-edit-form.component.html',
  styleUrls: ['./sub-category-edit-form.component.scss']
})
export class SubCategoryEditFormComponent implements OnInit {
  subCategoryCloudObject: SubCategory = {id: null , header: ' ', description: ' ', fk: null};
  newSubCategoryCloudObject: SubCategory = {id: null , header: ' ', description: ' ', fk: null};

  constructor(
    private subCategoryService: SubCategoryService,
    private dialogRef: MatDialogRef<SubCategoryEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.subCategoryCloudObject.id = data.id;
      this.subCategoryCloudObject.header = data.title;
      this.subCategoryCloudObject.description = data.descriptions;
      this.subCategoryCloudObject.fk = data.fkCategoryId;

      this.newSubCategoryCloudObject.id = data.id;
      this.newSubCategoryCloudObject.header = data.title;
      this.newSubCategoryCloudObject.description = data.descriptions;
      this.newSubCategoryCloudObject.fk = data.fkCategoryId;
     }

  ngOnInit() {
    // this.newCategoryCloudObject = this.categoryCloudObject;
    console.log('onInit before');
    console.log(this.newSubCategoryCloudObject);
    console.log('onInit after');
  }

  gem() {
    console.log('the object to save:');
    console.log(this.newSubCategoryCloudObject);
    this.subCategoryService.updateData(this.newSubCategoryCloudObject);
    console.log('jeg gemmer data nu.');
    /* this.subCategoryService.updateData(this.newCategoryCloudObject); */
    this.dialogRef.close();
  }

  fortryd() {
    this.dialogRef.close();
  }

}
