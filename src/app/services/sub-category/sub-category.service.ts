import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategory } from 'src/app/models/sub.category.model';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  /* private testSubCategory: SubCategory[] = [
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
 */
    constructor(private http: HttpClient) { }

    getAllSubCategory() {
      return this.http
     .get<any[]>('http://cloudprobackofficeapi.azurewebsites.net/api/subcategory').toPromise();
    }

    updateData(object: SubCategory) {
      let fk2number: number;
      switch (object.fk) {
        case 'cloud': fk2number = 1;
                      break;
        case 'web': fk2number = 2;
                    break;
        case 'mobile': fk2number = 3;
                       break;
        case 'support': fk2number = 4;
                        break;
        default:
          break;
      }

      this.http
       .put<number>(
         'http://cloudprobackofficeapi.azurewebsites.net/api/subcategory/' + object.id,
         {  title: object.header,
            descriptions: object.description,
            fkCategoryId: fk2number
          }
        ).subscribe(response => {
          console.log('udateData http response:');
          console.log(response);
        });
      }

   /*  getTestList() {
      return this.testSubCategory;
    } */
}
