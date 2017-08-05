import { Component, HostListener, Inject, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { headerTrigger, linkColorTrigger } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [headerTrigger, linkColorTrigger]
})

export class HeaderComponent implements OnInit, OnDestroy {
  currentRoute: string = '/';
  subscription: Subscription;
  mobileMenu: boolean = false;
  headerState: String;
  stateOfToggle = false;
  stateOfScroll = false;
  stateOfMenu = 'nohover';
  linkColorState: String = '';


  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit() {
    this.headerState = 'enter';
    this.subscription = this.router.events.subscribe( event => {
        if (event instanceof NavigationEnd ) {
          this.currentRoute = event.url;
          console.log("The current routing route is ..." + this.currentRoute);
          if(this.currentRoute == '/about'){
            console.log("ITS TRUEE!!!");
            this.linkColorState = 'contrast';
            
          }
        }
});
  }

  toggleTrue() {
      this.stateOfToggle = true;
      this.stateOfMenu = 'hover';
  }

  toggleFalse(){
      this.stateOfToggle = false;
      this.stateOfMenu = 'nohover';
  }

  navigate(route: string){
    this.appService.navigate(route);
  }

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  checkRoute(route, route2){
    if(this.currentRoute == route || this.currentRoute == route2)
      return true;
    else
      return false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
