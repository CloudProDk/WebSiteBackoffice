import { Injectable } from '@angular/core';
import { SubCategory } from 'src/app/models/sub.category.model';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  list: Array<SubCategory> = [];
  
  private testSubCategory: SubCategory[] = [
    {
      header: 'Microsoft Azure',
      description: 'cloud1 subcategory descriptio',
      fk: 'cloud'
    },
    {
      header: 'Internet of things',
      description: 'cloud2 subcategory descriptio',
      fk: 'cloud'
    },
    {
      header: 'Database',
      description: 'cloud3 subcategory descriptio',
      fk: 'cloud'
    },
    {
      header: 'web1',
      description: 'web1 subcategory descriptio',
      fk: 'web'
    },
    {
      header: 'mobile1',
      description: 'mobile1 subcategory descriptio',
      fk: 'mobile'
    },
    {
      header: 'support1',
      description: 'support1 subcategory descriptio',
      fk: 'support'
    },
  ]
  
    constructor() { }
  
    getSubCategory() {
      return this.testSubCategory;
    }

    testCategory(test: string) {
      return this.testCategory[test];

    }
}
