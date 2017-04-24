import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppService {
  openState = new EventEmitter<Boolean>();

  constructor() { }

  helloFromAppService(){
    console.log("Hello!");
  }

  closeMenu(){
    this.openState.emit(false);
  }

}
