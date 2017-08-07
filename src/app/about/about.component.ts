import { Component, HostBinding, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'

import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';

import { backgroundTrigger, overlayTrigger, contentTrigger } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [backgroundTrigger, overlayTrigger, contentTrigger]
})
export class AboutComponent implements OnInit {
subscription: Subscription;
backgroundState: string;
overlayState: string;
contentState: string;
route: string;
opacity: number = 1;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.backgroundState = 'show';
    this.overlayState = 'hidden';
    this.contentState = 'hidden';

    setInterval(() => {
      if(this.opacity == 1)
        this.opacity = 0;
      else
        this.opacity = 1;
    }, 600);

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
        this.overlayState = 'enter';
    }
    else if(event.triggerName == 'overlayState' && event.toState == 'enter' ) {
        this.contentState = 'enter';
    }
    else if(event.toState == 'leave') {
        // reset states
        this.backgroundState = 'show';
        this.overlayState = 'hidden';
        this.contentState = 'hidden';
        this.router.navigateByUrl('/' + this.route);
    }
  }

  navigate(route: string){
    this.appService.navigate(route);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}