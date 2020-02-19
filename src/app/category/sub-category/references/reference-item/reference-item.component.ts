import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Reference } from 'src/app/models/reference.model';

@Component({
  selector: 'app-reference-item',
  templateUrl: './reference-item.component.html',
  styleUrls: ['./reference-item.component.scss']
})
export class ReferenceItemComponent implements OnInit {
  @Input() reference: Reference;
  @Output() referenceSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.referenceSelected.emit();
  }
}
