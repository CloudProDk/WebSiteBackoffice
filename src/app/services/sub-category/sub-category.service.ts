import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategory } from 'src/app/models/sub.category.model';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

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
  ];

    constructor(private http: HttpClient) { }

    getAllSubCategory() {
      return this.http
     .get<any[]>('http://cloudprobackofficeapi.azurewebsites.net/api/subcategory').toPromise();
    }

    getTestList() {
      return this.testSubCategory;
    }
}
