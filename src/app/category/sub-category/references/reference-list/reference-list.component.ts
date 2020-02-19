import { Reference } from 'src/app/models/reference.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference/reference.service';


@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.scss']
})
export class ReferenceListComponent implements OnInit {
  @Output() referenceWasSelected = new EventEmitter<Reference>();
  listOfRefs = [];
  @Input() clickedReference: Reference ;
  @Output() referenceSelected = new EventEmitter<void>();


  constructor(private listService: ReferenceService) { }

  ngOnInit() {
    this.listOfRefs = this.listService.listOfReferences();
    console.log(this.listOfRefs);
  }

  onSelected() {
    this.referenceSelected.emit();
  }
  onReferenceSelected(reference: Reference) {
    this.referenceWasSelected.emit(reference);


  }

}

