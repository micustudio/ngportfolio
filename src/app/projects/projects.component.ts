import { Component, HostBinding, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'

import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';

import { backgroundTrigger, overlayTrigger, contentTrigger } from '../animations';

import projects from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [ backgroundTrigger, overlayTrigger, contentTrigger ]
})
export class ProjectsComponent implements OnInit {
  subscription: Subscription;
  backgroundState: string;
  overlayState: string;
  contentState: string;
  route: string;

  projects = projects;

 constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.backgroundState = 'show';
    this.overlayState = 'hidden';
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

  open(link){
    window.open(link);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
