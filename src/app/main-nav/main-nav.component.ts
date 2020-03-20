import { HeadlineService } from './../services/headlines/headline.service';
import { Headline } from './../models/headline.model';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterService } from '../services/router/router.service';
import { Router } from '@angular/router';
import { RouteList, Route, RouteItem } from '../shared/routelist';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { HeadlineComponent } from '../headline/headline.component';

@Component({
  selector: 'app-menu',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  routelist: RouteItem[] = [];
  headline1: Headline;
  headline2: Headline;

  mySrting: '/reference';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private routerSvc: RouterService,
              public routes: RouteList,
              private dialog: MatDialog,
              private headlineService: HeadlineService
              ) {}

  dothis(route: string) {
    console.log('pressed');
    this.routerSvc.Navigate(route);
    console.log(route);
  }

  async ngOnInit() {
    this.routelist = this.routes.getRoutes();
    this.headline1 = await this.headlineService.getHeadline1();
    this.headline2 = await this.headlineService.getHeadline2();

  }

  openDialog1() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';

    dialogConfig.data = {
      id: this.headline1.id,
      title: this.headline1.title,
      descriptions: this.headline1.descriptions,
      headlineName: 'Headline 1'
    };

    const dialogRef = this.dialog.open(HeadlineComponent, dialogConfig);
  }

  openDialog2() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';

    dialogConfig.data = {
      id: this.headline2.id,
      title: this.headline2.title,
      descriptions: this.headline2.descriptions,
      headlineName: 'Headline 2'
    };

    const dialogRef = this.dialog.open(HeadlineComponent, dialogConfig);

  }

}
