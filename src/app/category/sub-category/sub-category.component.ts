

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

  constructor(private activatedRoute: ActivatedRoute,
              private subCategoryService: SubCategoryService,
              public dialog: MatDialog) { }

  ngOnInit() {

   /*  this.listOfSubCategory = this.subCategoryService.getSubCategory(); */
   this.subCategoryService.getAllSubCategory().subscribe(response => {
              console.log('our responce:');
              console.log(response);
              this.listOfSubCategory = response;
            });
    //her tager man parametren fra url cloud, web etc.
   this.subscription = this.activatedRoute.paramMap.subscribe(params => {
      this.sub = params.get('sub-category');

    //her bliver parametren sat til at skulle være det samme som vore fkcategoryid
    //men vores fk er et tal og vores parametre er en string
      this.sortedList = this.listOfSubCategory.filter(x => { switch (x.fkCategoryId) {
                          case 1: 'cloud' === this.sub;
                                  break;
                          case 2: 'web' === this.sub;
                                  break;
                          case 3: 'mobile' === this.sub;
                                  break;
                          case 4: 'support' === this.sub;
                                  break;
                          }
                        }
                        );
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
      title: subCat.title,
      descriptions: subCat.descriptions,
      fkCategoryId: subCat.fkCategoryId
    };

    const dialogRef = this.dialog.open(SubCategoryEditFormComponent, dialogConfig);
  }
}
