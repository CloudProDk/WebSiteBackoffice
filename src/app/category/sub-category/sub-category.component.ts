import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/app/services/sub-category/sub-category.service';
import { SubCategory } from 'src/app/models/sub.category.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryEditFormComponent } from '../category-edit-form/category-edit-form.component';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  listOfSubCats: Array<SubCategory>;
  azureObject: SubCategory;
  iotObject: SubCategory;
  databaseObject: SubCategory;
  object2send2DialogBox: SubCategory = {header: ' ', description: ' '};

  constructor(private subCatService: SubCategoryService, public dialog: MatDialog) { }

  ngOnInit() {
    this.listOfSubCats = this.subCatService.listOfSubCategory();
    console.log(this.listOfSubCats);
    this.azureObject = this.listOfSubCats[0];
    this.iotObject = this.listOfSubCats[1];
    this.databaseObject = this.listOfSubCats[2];
    console.log(this.azureObject);
  }

  clickedButton(name: string) {
    console.log('clicked button name:' + name);
    if (name === 'azure') {
      this.object2send2DialogBox = this.azureObject;
    } else if (name === 'iot') {
      this.object2send2DialogBox = this.iotObject;
    } else if (name === 'database' ) {
      this.object2send2DialogBox = this.databaseObject;
    }

    console.log(this.object2send2DialogBox);

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';

    dialogConfig.data = {
      header: this.object2send2DialogBox.header,
      description: this.object2send2DialogBox.description
    };

    const dialogRef = this.dialog.open(CategoryEditFormComponent, dialogConfig);
  }
}
