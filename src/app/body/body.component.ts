import { Component, OnInit } from '@angular/core';

import { navigateTrigger } from '../animations';
import { Router } from '@angular/router'

import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [ navigateTrigger
    // trigger('borderState', [
    //   transition('void => *', [
    //     style({
    //       width: '0%'
    //     }),
    //     animate('2000ms 300ms ease-out')
    //     ])
    // ])
  ]
})
export class BodyComponent implements OnInit {
subscription: Subscription;
transitionState: string;
route: string;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.appService.navigationChanged
      .subscribe(
        (route: string) => {
              this.transitionState = 'leave';
              this.route = route;
          
        }
      );
  }

  animationDone(event) {
    if(this.route) {
        console.log(event.toState); //if
        this.router.navigateByUrl('/' + this.route);
        this.transitionState = null;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
