

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryEditFormComponent } from '../category-edit-form/category-edit-form.component';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SubCategory } from 'src/app/models/sub.category.model';
import { SubCategoryService } from 'src/app/services/sub-category/sub-category.service';


@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})


export class SubCategoryComponent implements OnInit, OnDestroy {
  routeName: any;
  sub: any;
  listOfSubCategory: SubCategory[] = [];
  sortedList: SubCategory[] = [];

  constructor(private activatedRoute: ActivatedRoute, private subCategoryService: SubCategoryService,  public dialog: MatDialog) { }

  ngOnInit() {

    this.listOfSubCategory = this.subCategoryService.getSubCategory();
    this.activatedRoute.paramMap.subscribe(params => {
      this.sub = params.get('sub-category');
      this.sortedList = this.listOfSubCategory.filter(x => x.fk === this.sub);

    });

  }

  ngOnDestroy() { }

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
