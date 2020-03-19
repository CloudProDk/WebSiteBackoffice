import { HttpClient } from '@angular/common/http';
import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { Reference } from 'src/app/models/reference.model';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  list: Array<Reference> = [];
  
  private testReference: Reference[] = [
    {
      header: 'reference microsoft',
      description: 'reference description',
      fk: 'microsoft-azure'
    },
    {
      header: 'reference microsoft 2',
      description: 'reference description',
      fk: 'microsoft-azure'
    },
    {
      header: 'reference iot',
      description: 'reference description',
      fk: 'iot'
    },
  ];

  ref1: Reference = {header: 'dsb', description: 'Api til DSB mobil app '};
  ref2: Reference = {header: 'Movia', description: 'Database til Movias online platform '};
  ref3: Reference = {header: 'Silvan', description: 'ttshdsgdhjs7 edkhedhei jdkjdksjd jskdjskjd sjkds'};
  listLength: number;
  selectedReference: Reference = {header: ' qqqq', description: ' qqqqq'};

  constructor(private http: HttpClient) {  }

  getReference() {
    return this.testReference;
  }

  listOfReferences() {
    this.listLength = this.list.push(this.ref1, this.ref2, this.ref3);
    return this.list;
  }

  setSelectedReference(ref: Reference) {
    this.selectedReference = ref;
  }

  getSelectedReference(): Reference {
    return this.selectedReference;
  }

  postReference(ref: Reference) {
    let fk2number: number;
    switch (ref.fk) {
        case 'microsoft-azure': fk2number = 2;
                                break;
        case 'iot': fk2number = 3;
                    break;
        case 'database': fk2number = 4;
                         break;
        default:
          break;
      }
    this.http.post<number>(
      'http://cloudprobackofficeapi.azurewebsites.net/api/reference',
       {title: ref.header,
        descriptions: ref.description,
        imagePath: ref.imagePath,
        fkSubCategoryId: fk2number
      }).subscribe(data => {
         console.log('http post respons:' + data);
       });
  }

  updateReference(ref: Reference) {
    let fk2number: number;
    switch (ref.fk) {
        case 'microsoft-azure': fk2number = 2;
                                break;
        case 'iot': fk2number = 3;
                    break;
        case 'database': fk2number = 4;
                         break;
        default:
          break;
      }
    console.log('print fk2Number:' + fk2number);
    this.http
       .put<number>(
         'http://cloudprobackofficeapi.azurewebsites.net/api/reference/' + ref.id,
         {  title: ref.header,
            descriptions: ref.description,
            imagePath: ref.imagePath,
            fkSubCategoryId: fk2number
          }
        ).subscribe(response => {
          console.log('updateReference http response:');
          console.log(response);
        });

  }

  deleteReference(id: number) {
    this.http
     .delete<number>('http://cloudprobackofficeapi.azurewebsites.net/api/reference/' + id)
     .subscribe(data => {
       console.log('delete http response:' + data);
     });
  }

  getAllReferencesFromApi() {
    return this.http
   .get<any[]>('http://cloudprobackofficeapi.azurewebsites.net/api/reference').toPromise();
  }
}
