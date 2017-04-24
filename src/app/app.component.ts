import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService: AppService){}

  closeMenu(){
    this.appService.closeMenu();
    console.log("IM CLOSING FROM THE APP COMPONENT!!");
  }

}
