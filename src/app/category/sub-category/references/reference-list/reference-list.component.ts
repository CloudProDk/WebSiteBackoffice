import { Reference } from 'src/app/models/reference.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference/reference.service';


@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.scss']
})
export class ReferenceListComponent implements OnInit {
  listOfRefs: Array<Reference> = [];
  @Output() activeObject = new EventEmitter<Reference>();

  constructor(private referenceService: ReferenceService) { }

  ngOnInit() {
    this.listOfRefs = this.referenceService.listOfReferences();
    console.log(this.listOfRefs);
  }

  selectedItem( ref: Reference) {
    this.activeObject.emit(ref);
    console.log(ref);
    console.log('set selected reference in ref service');
    this.referenceService.setSelectedReference(ref);
  }
}

