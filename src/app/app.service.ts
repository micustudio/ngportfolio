import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class AppService {
  navigationChanged = new Subject<String>();

  constructor(private router: Router) { }

  helloFromAppService(){
    console.log("Hello!");
  }

  closeMenu(){
    // this.openState.emit(false);
  }

    navigate(route: string) {
    this.navigationChanged.next(route);
    console.log("the routes is... " + route);
    this.router.navigateByUrl('/' + route);
  }

}
