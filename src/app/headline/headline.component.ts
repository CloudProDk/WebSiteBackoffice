import { HeadlineService } from './../services/headlines/headline.service';
import { Headline } from './../models/headline.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  refhelpObject: Headline = {id: null, title: '', descriptions: ''};
  headlineName = '';

  constructor(
              private headlineService: HeadlineService,
              private dialogRef: MatDialogRef<HeadlineComponent>,
              @Inject(MAT_DIALOG_DATA) data) {

      this.refhelpObject.id = data.id;
      this.refhelpObject.title = data.title;
      this.refhelpObject.descriptions = data.descriptions;
      this.headlineName = data.headlineName;
     }

  ngOnInit() {
  }

  UpdateHeadline() {
    this.headlineService.updateHeadline(this.refhelpObject);
  }

  fortryd() {
    this.dialogRef.close();
  }

}
