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

  constructor(private activatedRoute: ActivatedRoute, private subCategoryService: SubCategoryService) { }

  ngOnInit() {
    this.listOfSubCategory = this.subCategoryService.getSubCategory();
    this.activatedRoute.paramMap.subscribe(params => {
      this.sub = params.get("sub-category")
      
      if (this.sub === 'cloud') {        
        // skal havde den til at kun at vise den item i listen som har fk="cloud"
      }
      if (this.sub === 'web') {
        console.log("web er valgt")
      }
      if (this.sub === 'mobile') {
        console.log("mobile er valgt")
      }
      if (this.sub === 'support') {
        console.log("support er valgt")
      }
    })

  }

  ngOnDestroy() {

  }

}
