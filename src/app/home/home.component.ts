import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'

import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';

import { navigateTrigger } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: []
})
export class HomeComponent {
// subscription: Subscription;
// transitionState: string;
// route: string;

//   constructor(private appService: AppService,
//               private router: Router) { }

//   ngOnInit() {
//     this.subscription = this.appService.navigationChanged
//       .subscribe(
//         (route: string) => {
//               console.log("whats uppp"); //if
//               this.transitionState = 'leave';
//               this.route = route;
          
//         }
//       );
//   }

//   animationDone(event) {
//     if(this.route) {
//         console.log(event.toState); //if
//         this.router.navigateByUrl('/' + this.route);
//     }
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }

}
