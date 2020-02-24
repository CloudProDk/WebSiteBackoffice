import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterService } from '../services/router/router.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { RouteList } from '../shared/routelist';

@Component({
  selector: 'app-menu',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  mySrting: '/reference'
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private routerSvc: RouterService) {}

  dothis(){
    console.log("pressed")
    this.routerSvc.Navigate('/reference')
  }


}
