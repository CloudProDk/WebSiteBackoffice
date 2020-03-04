
import { ReferenceEditComponent } from './../reference-edit/reference-edit.component';
import { Reference } from 'src/app/models/reference.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference/reference.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReferenceItemComponent } from '../reference-item/reference-item.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.scss']
})
export class ReferenceListComponent implements OnInit {
  listOfRefs: Array<Reference> = [];
  testListOfRefs: Reference[] = [];
  sortedList: Reference[] = [];
  sub: any;
  selectedReferenceInListComp: Reference = {header: '', description: ''};

  constructor(private referenceService: ReferenceService, public dialog: MatDialog, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.testListOfRefs = this.referenceService.getReference();
    this.activatedRoute.paramMap.subscribe(params => {
      this.sub = params.get('references');
      this.sortedList = this.testListOfRefs.filter(x => x.fk === this.sub);
      console.log(this.sortedList);
    })
    this.listOfRefs = this.referenceService.listOfReferences();
    console.log(this.listOfRefs);
  }

  selectedItem( ref: Reference) {
    this.selectedReferenceInListComp = ref;
    console.log(ref);
    console.log('set selected reference in ref service');
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      header: this.selectedReferenceInListComp.header,
      description: this.selectedReferenceInListComp.description
    };
    const dialogRef = this.dialog.open(ReferenceEditComponent, dialogConfig);

  }

  openAddDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';

    const dialogRef = this.dialog.open(ReferenceItemComponent, dialogConfig);
  }
}

