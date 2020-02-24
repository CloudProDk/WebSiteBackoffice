import { Injectable } from '@angular/core';
import { SubCategory } from 'src/app/models/sub.category.model';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  list: Array<SubCategory> = [];
  listLength: number;
  
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

    listOfCategory() {
     this.listLength = this.list.push(this.subCat1, this.subCat2, this.subCat3);
     return this.list;
    }
  
    saveCloudData(text: string) {
    this.subCat1.description = text;
    console.log('Inside CategoryService' + this.subCat1.description);
  }
}
