import { Component, OnInit, Input } from '@angular/core';
import { Reference } from 'src/app/models/reference.model';
import { ReferenceService } from 'src/app/services/reference/reference.service';

@Component({
  selector: 'app-reference-edit',
  templateUrl: './reference-edit.component.html',
  styleUrls: ['./reference-edit.component.scss']
})
export class ReferenceEditComponent implements OnInit {
// @Input() activeObject: Reference = {header: 'aaaaaa', description: 'zzzzzzzzz'};
  selectedReference: Reference = {header: 'www', description: 'zzz'};

  constructor(private referenceService: ReferenceService) { }

  ngOnInit() {
    this.selectedReference = this.referenceService.getSelectedReference();
  }

  clickTest() {
    console.log('hahahahaha');
  }
}
