import { Component, OnInit, Input, Inject } from '@angular/core';
import { Reference } from 'src/app/models/reference.model';
import { ReferenceService } from 'src/app/services/reference/reference.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reference-edit',
  templateUrl: './reference-edit.component.html',
  styleUrls: ['./reference-edit.component.scss']
})
export class ReferenceEditComponent implements OnInit {
// @Input() activeObject: Reference = {header: 'aaaaaa', description: 'zzzzzzzzz'};
 selectedReference: Reference = {header: 'qqqq', description: 'wwww'};

  constructor(
                private referenceService: ReferenceService,
                private dialogRef: MatDialogRef<ReferenceEditComponent>,
                @Inject(MAT_DIALOG_DATA) data) {

                  this.selectedReference.header = data.header;
                  this.selectedReference.description = data.description;
                 }

  ngOnInit() {
  }

  clickTest() {
    console.log('hahahahaha');
  }
}
