import { Component, OnInit, Input } from '@angular/core';
import { RouterService } from '../services/router/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {


  constructor(private routerSvc: RouterService) {  }

  navigateTo(route: string) {
    console.log('pressed');
    this.routerSvc.Navigate(route);
    console.log(route);
  }

  ngOnInit() {
  }

}
