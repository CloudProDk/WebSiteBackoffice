import { Component, OnInit } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference/reference.service';
import { Reference } from 'src/app/models/reference.model';


@Component({
  selector: 'app-reference-item',
  templateUrl: './reference-item.component.html',
  styleUrls: ['./reference-item.component.scss']
})
export class ReferenceItemComponent implements OnInit {
headerInput: String;
descriptionInput: String;
refhelpObject: Reference = {header: '', description: ''}

  constructor(private referenceService: ReferenceService ) { }

  ngOnInit() {
  }

 TilfojReference() {
   this.headerInput= this.refhelpObject.header;
   this.descriptionInput = this.refhelpObject.description;
   this.referenceService.TilfojReference(this.refhelpObject);
   console.log("test");
 }



}
