import { HttpClient } from '@angular/common/http';


import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryEditFormComponent } from '../category-edit-form/category-edit-form.component';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SubCategory } from 'src/app/models/sub.category.model';
import { SubCategoryService } from 'src/app/services/sub-category/sub-category.service';
import { Subscription } from 'rxjs';
import { SubCategoryEditFormComponent } from './sub-category-edit-form/sub-category-edit-form.component';


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
  subscription: Subscription;
  helperSubCat: SubCategory = {id: null, header: '', description: '', fk: ''};

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private subCategoryService: SubCategoryService,
              public dialog: MatDialog) { }

  async ngOnInit() {

    /* const data = await this.http.get<any[]>('http://cloudprobackofficeapi.azurewebsites.net/api/subcategory').toPromise(); */
    const data = await this.subCategoryService.getAllSubCategory();
    data.forEach(x => {
      const helperObject: SubCategory = {id: null, header: '', description: '', fk: ''};
      helperObject.id = x.id;
      helperObject.header = x.title;
      helperObject.description = x.descriptions;
      if (x.fkCategoryId === 1) {
          helperObject.fk = 'cloud';
        } else if (x.fkCategoryId === 2) {
          helperObject.fk = 'web';
        } else if (x.fkCategoryId === 3) {
          helperObject.fk = 'mobile';
        } else if (x.fkCategoryId === 2) {
          helperObject.fk = 'support';
        }
      console.log(helperObject);
      this.listOfSubCategory.push(helperObject);
    });
    /* this.subCategoryService.getAllSubCategory().subscribe(response => {
            response.forEach(x => {
              this.helperSubCat.id = x.id;
              this.helperSubCat.header = x.title;
              this.helperSubCat.description = x.descriptions;
              if (x.fkCategoryId === 1) {
                  this.helperSubCat.fk = 'cloud';
                } else if (x.fkCategoryId === 2) {
                  this.helperSubCat.fk = 'web';
                } else if (x.fkCategoryId === 3) {
                  this.helperSubCat.fk = 'mobile';
                } else if (x.fkCategoryId === 2) {
                  this.helperSubCat.fk = 'support';
                }
              console.log(this.helperSubCat);
              this.listOfSubCategory.push(this.helperSubCat);
            },
            err => console.error('Observer got an error: ' + err)
             );
            console.log('Observer got a complete notification');
          }); */

    console.log('printing list of subcategory:');
    console.log(this.listOfSubCategory);
  /*  this.subCategoryService.getAllSubCategory().subscribe(response => {
              console.log('our responce:');
              console.log(response);
              this.listOfSubCategory = response;
            }); */
    // her tager man parametren fra url cloud, web etc.
    this.subscription = this.activatedRoute.paramMap.subscribe(params => {
      this.sub = params.get('sub-category');

    // her bliver parametren sat til at skulle være det samme som vore fkcategoryid
    // men vores fk er et tal og vores parametre er en string
      this.sortedList = this.listOfSubCategory.filter(x => x.fk === this.sub );
/*       this.listOfSubCategory.forEach(x => {
        if (x.fkCategoryId === 1 && 'cloud' === this.sub) {
          this.sortedList.push(x);
        } else if (x.fkCategoryId === 2 && 'web' === this.sub) {
          this.sortedList.push(x);
        } else if (x.fkCategoryId === 3 && 'mobile' === this.sub) {
          this.sortedList.push(x);
        } else if (x.fkCategoryId === 4 && 'support' === this.sub) {
          this.sortedList.push(x);
        } */
      console.log('sorted list:');
      console.log(this.sortedList);
    });

  }


ngOnDestroy() {
    this.subscription.unsubscribe();
  }




openDialog(subCat: SubCategory) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';

    dialogConfig.data = {
      id: subCat.id,
      title: subCat.header,
      descriptions: subCat.description,
      fkCategoryId: subCat.fk
    };

    const dialogRef = this.dialog.open(SubCategoryEditFormComponent, dialogConfig);
  }
}
