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

  constructor(private activatedRoute: ActivatedRoute, private subCategoryService: SubCategoryService) { }

  ngOnInit() {
    this.listOfSubCategory = this.subCategoryService.getSubCategory();
    this.activatedRoute.paramMap.subscribe(params => {
      this.sub = params.get("sub-category")
      this.sortedList = this.listOfSubCategory.filter(x => x.fk === this.sub);

    });

  }

  ngOnDestroy() {
  }

}
