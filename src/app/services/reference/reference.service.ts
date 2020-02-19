import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { Reference } from 'src/app/models/reference.model';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  list: Array<Reference> = [];
  ref1: Reference = {header: 'dsb', description: 'Api til DSB mobil app '};
  ref2: Reference = {header: 'Movia', description: 'Database til Movias online platform '};
  ref3: Reference = {header: 'Silvan', description: 'ttshdsgdhjs7 edkhedhei jdkjdksjd jskdjskjd sjkds'};
  listLength: number;

  constructor() {  }

  listOfReferences() {
    this.listLength = this.list.push(this.ref1, this.ref2, this.ref3);
    return this.list;
  }
}
