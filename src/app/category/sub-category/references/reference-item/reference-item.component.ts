import { Component, OnInit } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference/reference.service';
import { Reference } from 'src/app/models/reference.model';


@Component({
  selector: 'app-reference-item',
  templateUrl: './reference-item.component.html',
  styleUrls: ['./reference-item.component.scss']
})
export class ReferenceItemComponent implements OnInit {
headerInput: string;
descriptionInput: string;
refhelpObject: Reference = {header: '', description: '' };

  constructor(private referenceService: ReferenceService ) { }

  ngOnInit() {
  }

 TilfojReference(headerInput, descriptionInput) {
   this.refhelpObject.header = headerInput;
   this.refhelpObject.description = descriptionInput;
   this.referenceService.TilfojReference(this.refhelpObject);
   console.log("test");
 }



}
