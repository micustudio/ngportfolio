import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {
  navigationChanged = new Subject<String>();
  openState = new EventEmitter<Boolean>();

  constructor() { }

  helloFromAppService(){
    console.log("Hello!");
  }

  closeMenu(){
    this.openState.emit(false);
  }

    navigate(route: string) {
    this.navigationChanged.next(route);
    console.log("the routes is... " + route);
  }

}
