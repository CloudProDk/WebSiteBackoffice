import { Injectable } from '@angular/core';
import { SubCategory } from 'src/app/models/sub.category.model';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  list: Array<SubCategory> = [];
  listLength: number;

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
  
  subCat1: SubCategory = {
                            header: 'Miscrosoft Azure',
                            description: 'Ny løsning, migrering af eksisterende, eller kombination af begge? Vi rådgiver, designer, udvikler, implementerer og drifter sikre IT infrastruktur projekter baseret på Microsoft Azure.'
                          };
  subCat2: SubCategory = {
                            header: 'Internet of things',
                            description: 'Brug for unikke IoT løsninger, der dækker netop dine behov? Vi laver løsninger til bl.a. overvågning, målinger, logistik og automatiserede processer, som blot er et lille udsnit af hvad vi kan.'
                          };
  subCat3: SubCategory = {
                            header: 'Databaser',
                            description: 'Ny løsning, migrering af eksisterende, eller kombination af begge? Vi rådgiver, designer, udvikler, implementerer og drifter sikre IT infrastruktur projekter baseret på Microsoft Azure.'
                          };




    constructor() { }

    getSubCategory() {
      return this.testSubCategory;
    }

    testCategory(test: string) {
      return this.testCategory[test];

    }

    listOfCategory() {
     this.listLength = this.list.push(this.subCat1, this.subCat2, this.subCat3);
     return this.list;
    }
  
    saveCloudData(text: string) {
    this.subCat1.description = text;
    console.log('Inside CategoryService' + this.subCat1.description);
  }
}
