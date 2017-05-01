import { Component, HostListener, Inject, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppService } from '../app.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuState',[
      state('hover', style({
        backgroundColor: '#FEFEFE',
        color: 'rgba(0, 0, 0, 0.8)'
      })),
      transition('nohover => hover', 
        animate(200) 
      )
    ]),
    trigger('submenuState',[
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate(0, 10px)',
        }),
        animate('200ms ease-out')
      ]),
      transition('* => void',
        animate('100ms ease-out', 
        style({
          opacity: 0,
          transform: 'translate(0, 10px)'
        }))
      )
    ])
  ]
})

export class HeaderComponent implements OnInit {
  stateOfToggle = false;
  stateOfScroll = false;
  stateOfMenu = 'nohover';
  constructor(private appService: AppService,
              // private router: Router
              @Inject(DOCUMENT) private document: Document
              ){}

  toggleTrue() {
      this.stateOfToggle = true;
      this.stateOfMenu = 'hover';
  }

  toggleFalse(){
      this.stateOfToggle = false;
      this.stateOfMenu = 'nohover';
  }

  // sayHi (){
  //   this.appService.helloFromAppService();
  // }

  ngOnInit() {
  }

  // navigate(){
  //           setTimeout(() => { 
  //           this.router.navigateByUrl('/items');
  //       }, 300);
  // }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 100) {
      console.log("it scrolled past 100.");
      this.stateOfScroll = true;
    }
  }

}
