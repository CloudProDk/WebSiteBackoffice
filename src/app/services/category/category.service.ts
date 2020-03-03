import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryComponent } from 'src/app/category/category.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
list: Array<Category> = [];
listLength: number;

cat1: Category = {imagePath:'https://previews.123rf.com/images/yupiramos/yupiramos1706/yupiramos170603259/79414771-cute-round-icon-blue-clouds-cartoon-vector-graphic-design.jpg',
                  header: 'Cloud',
                  description: 'Vi kan hjælpe dig uanset om det er migrering af eksisterende infrastruktur, design af en ny infrastruktur i skyen, sikkerhedshåndtering af forskellige løsninger eller rådgivning omkring Microsoft Cloud.'
                  };
cat2: Category = {imagePath:'https://www.logolynx.com/images/logolynx/s_08/087dd16819b99456866c0dc88cf5369d.jpeg',
                  header: 'Web',
                  description: 'Vi laver webløsninger tilpasset dine krav og ønsker Uanset om det er websites, platforme eller integrationer kan vi sikre dig en fremtidssikret og responsiv løsning. Vi benytter bl.a. Angular i vores webprogrammering'
                  };
cat3: Category = {imagePath: 'https://cdn0.iconfinder.com/data/icons/mobile-device/512/mobile-phone-blue-round-2-512.png',
                  header: 'Mobile',
                  description: 'Vi kan udvikle din næste mobilapp eller mobile projekt Vi laver native apps til IOS og Android som både er hurtige og samtidig overholder stigende krav fra Apple og Google. Vi laver også mobilapps til din Cloud- eller webløsning.'
                  };

cat4: Category = {imagePath: 'https://www.seekpng.com/png/detail/28-287453_outbound-call-support-tech-support-icon-blue.png',
                  header: 'Support',
                  description: 'Lad os håndtere din IT for dig Vi leverer abonnements baserede IT løsninger til mindre virksomheder som ikke kan eller vil selv. Det kalder vi IT-as-a-Service.'
                  };
  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http
    .get<Category[]>('https://localhost:44313/api/category');
  }

  listOfCategory() {
   this.listLength = this.list.push(this.cat1, this.cat2, this.cat3, this.cat4);
   return this.list;
  }

  saveCloudData(text: string) {
    this.cat1.description = text;
    console.log('Inside CategoryService' + this.cat1.description);
}

}
