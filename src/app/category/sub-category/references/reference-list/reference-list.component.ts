
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

  async ngOnInit() {
    /* this.testListOfRefs = this.referenceService.getReference(); */
    const data = await this.referenceService.getAllReferencesFromApi();
    console.log('list of all refs from API:');
    console.log(data);
    data.forEach(x => {
      const helperObject: Reference = {id: null, imagePath: '', header: '', description: '', fk: ''};
      helperObject.id = x.id;
      helperObject.header = x.title;
      helperObject.description = x.descriptions;
      helperObject.imagePath = x.imagePath;
      if (x.fkSubCategoryId === 2) {
          helperObject.fk = 'microsoft-azure';
        } else if (x.fkSubCategoryId === 3) {
          helperObject.fk = 'iot';
        } else if (x.fkSubCategoryId === 4) {
          helperObject.fk = 'database';
        }
      console.log(helperObject);
      this.testListOfRefs.push(helperObject);
    });
    
    
    this.activatedRoute.paramMap.subscribe(params => {
      this.sub = params.get('references');
      this.sortedList = this.testListOfRefs.filter(x => x.fk === this.sub);
      console.log('this is the sorted list:');
      console.log(this.sortedList);
    });
    /* this.listOfRefs = this.referenceService.listOfReferences();
    console.log('this is the list of reference');
    console.log(this.listOfRefs); */
  }

  selectedItem( ref: Reference) {
    this.selectedReferenceInListComp = ref;
    console.log(ref);
    console.log('set selected reference in ref service');
  }

  openDialog(ref: Reference): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: ref.id,
      title: ref.header,
      descriptions: ref.description,
      imagePath: ref.imagePath,
      fkSubCategoryId: ref.fk
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

