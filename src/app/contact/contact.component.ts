import { Component, HostBinding, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'

import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';

import { backgroundTrigger, splashTrigger, contentTrigger } from '../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [ backgroundTrigger, splashTrigger, contentTrigger ]
})
export class ContactComponent implements OnInit {
subscription: Subscription;
backgroundState: string;
splashState: string;
contentState: string;
route: string;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.backgroundState = 'show';
    this.splashState = 'hidden';
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
    if(event.triggerName == 'backgroundState' && event.toState == 'show' ) {
        this.splashState = 'enter';
    }
    else if(event.triggerName == 'splashState' && event.toState == 'enter' ) {
        this.contentState = 'enter';
    }
    else if(event.toState == 'leave') {
        // reset states
        this.backgroundState = 'show';
        this.splashState = 'hidden';
        this.contentState = 'hidden';
        this.router.navigateByUrl('/' + this.route);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}