import { Component, OnInit, OnDestroy } from '@angular/core';

import { navigateTrigger } from '../animations';
import { Router, ActivatedRouteSnapshot } from '@angular/router'

import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [ navigateTrigger ]
})
export class BodyComponent implements OnInit, OnDestroy {
subscription: Subscription;
transitionState: string;
route: string;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.transitionState = 'enter';
    console.log(`Hello the animation state of the component state is... ${this.transitionState}`);
    this.subscription = this.appService.navigationChanged
      .subscribe(
        (route: string) => {
              this.transitionState = 'leave';
              this.route = route;
        }
      );
  }

  animationDone(event) {
        if(event.toState == 'leave') {
          console.log("Hey looks like the leave state is acticated.")
          this.router.navigateByUrl('/' + this.route);
          this.transitionState = null;
        }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
