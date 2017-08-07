import { Component } from '@angular/core';
import { AppService } from './app.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('borderState', [
      transition('void => *', [
        style({
          width: '0%'
        }),
        animate('2000ms 300ms ease-out')
        ])
    ])
  ]
})
export class AppComponent {

  constructor(private appService: AppService){}

  closeMenu(){
    this.appService.closeMenu();
  }

}
