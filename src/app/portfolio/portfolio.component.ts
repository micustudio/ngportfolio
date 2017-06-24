import { Component, HostBinding, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'

import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';

import { backgroundTrigger, contentTrigger } from '../animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [ backgroundTrigger, contentTrigger ]
})
export class PortfolioComponent implements OnInit {
  subscription: Subscription;
  backgroundState: string;
  contentState: string;
  route: string;

 constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.backgroundState = 'show';
    this.contentState = 'hidden';
    this.subscription = this.appService.navigationChanged
      .subscribe(
        (route: string) => {
          console.log("got it!! the route here is... " + route);
             this.backgroundState = 'leave';
              this.route = route;
        }
      );
  }

  animationDone(event) {
    console.log(event);
    if(event.triggerName == 'backgroundState' && event.toState == 'show' ) {
        this.contentState = 'enter';
    }
    else if(event.toState == 'leave') {
        // reset states
        this.backgroundState = 'show';
        this.contentState = 'hidden';
        this.router.navigateByUrl('/' + this.route);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
