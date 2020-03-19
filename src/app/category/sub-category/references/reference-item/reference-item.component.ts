import { Component, OnInit } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference/reference.service';
import { Reference } from 'src/app/models/reference.model';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-reference-item',
  templateUrl: './reference-item.component.html',
  styleUrls: ['./reference-item.component.scss']
})
export class ReferenceItemComponent implements OnInit {


refhelpObject: Reference = {id: null, header: '', description: '', imagePath: '', fk: '' };

  constructor(private referenceService: ReferenceService,
              private dialogRef: MatDialogRef<ReferenceItemComponent> ) {

              }

  ngOnInit() {
  }

 TilfojReference() {
   this.referenceService.postReference(this.refhelpObject);
   console.log('posted ref object:' + this.refhelpObject);
 }
 fortryd() {
  this.dialogRef.close();
 }

}
