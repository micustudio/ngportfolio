import { Component, HostListener, Inject, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { headerTrigger } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [headerTrigger]
})

export class HeaderComponent implements OnInit, OnDestroy {
  currentUrl: any;
  subscription: Subscription;
  mobileMenu: boolean = false;
  headerState: String;
  stateOfToggle = false;
  stateOfScroll = false;
  stateOfMenu = 'nohover';
  scrollNumber: number;
  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit() {
    this.headerState = 'enter';
    this.subscription = this.router.events.subscribe( event => {
        if (event instanceof NavigationEnd ) {
          this.currentUrl = event.url;
          console.log(this.currentUrl);
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
