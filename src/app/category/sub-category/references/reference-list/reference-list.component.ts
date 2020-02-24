import { ReferenceEditComponent } from './../reference-edit/reference-edit.component';
import { Reference } from 'src/app/models/reference.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference/reference.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.scss']
})
export class ReferenceListComponent implements OnInit {
  listOfRefs: Array<Reference> = [];
  selectedReferenceInListComp: Reference = {header: '', description: ''};

  constructor(private referenceService: ReferenceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.listOfRefs = this.referenceService.listOfReferences();
    console.log(this.listOfRefs);
  }

  selectedItem( ref: Reference) {
    this.selectedReferenceInListComp = ref;
    console.log(ref);
    console.log('set selected reference in ref service');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReferenceEditComponent, {height: '50%', width: '50%'});

  }
}

