import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterService } from '../services/router/router.service';
import { Router } from '@angular/router';
import { RouteList, Route, RouteItem } from '../shared/routelist';

@Component({
  selector: 'app-menu',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  routelist: RouteItem[] = [];

  mySrting: '/reference';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private routerSvc: RouterService, public routes: RouteList) {}

  dothis(route: string) {
    console.log('pressed');
    this.routerSvc.Navigate(route);
    console.log(route)
  }



  ngOnInit() {
    this.routelist = this.routes.getRoutes();
  }


}
