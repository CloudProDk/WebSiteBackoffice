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

  constructor() {  }

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

  TilfojReference(Ref: Reference){
    this.listLength = this.list.push(Ref);
  }

}
