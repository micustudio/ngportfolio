import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class AppService {
  navigationChanged = new Subject<String>();
  outsideMenuClicked = new Subject<boolean>();

  constructor(private router: Router) { }

  helloFromAppService(){
    console.log("Hello!");
  }

  closeMenu(){
    this.outsideMenuClicked.next(true);
    console.log("yes was clicked outside.");
  }

    navigate(route: string) {
    this.navigationChanged.next(route);
    console.log("the routes is... " + route);
    // this.router.navigateByUrl('/' + route);
  }

}
