import { Component, HostListener, Inject, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { headerTrigger, linkColorTrigger, x1Trigger, x2Trigger, x3Trigger } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [headerTrigger, linkColorTrigger, x1Trigger, x2Trigger, x3Trigger]
})

export class HeaderComponent implements OnInit, OnDestroy {
  currentRoute: string = '/';
  subscription: Subscription;
  subscription2: Subscription;
  mobileMenu: boolean = false;
  headerState: String;
  stateOfToggle = false;
  stateOfScroll = false;
  stateOfMenu = 'nohover';
  linkColorState: String = '';
  navClass = '';
  navLink = '';
  headerWidth: number;

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private router: Router){}

@HostListener('window:resize', ['$event'])
  onResize(event){
    console.log("Width: " + event.target.innerWidth);
    this.headerWidth = event.target.innerWidth;
  }

  ngOnInit() {
    this.headerState = 'enter';
    this.headerWidth = window.innerWidth;
  console.log("the header witdth is... " + this.headerWidth);
    this.subscription = this.router.events.subscribe( event => {
        if (event instanceof NavigationEnd ) {
          this.currentRoute = event.url;
          console.log("The current routing route is ..." + this.currentRoute);
        }
    });
    this.subscription2 = this.appService.outsideMenuClicked.subscribe( value => {
      if(value == true && this.headerState == 'side-menu'){
        this.headerState = 'navigate';
      }
      else
        return false;
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
    if(this.headerState == 'side-menu' && this.headerWidth < 768 ){
        this.headerState = 'navigate';
    }
    this.appService.navigate(route);
  }

  openMenu() {
    if(this.headerState !== 'side-menu'){
        this.navClass = 'side-menu';
        this.navLink = 'block';
        this.headerState = 'side-menu';
    }
    else {
        this.headerState = 'navigate';
    }
  }

animationDone(event) {
    console.log(event);
    if(event.triggerName == 'headerState' && event.toState == 'navigate') {
        this.headerState = 'return';
        console.log("navigation is true! (either closed or navigated somewhere else)");
        this.navClass = '';
        this.navLink = '';
    }
  }

  checkRoute(route, route2){
    if(this.currentRoute == route || this.currentRoute == route2)
      return true;
    else
      return false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
