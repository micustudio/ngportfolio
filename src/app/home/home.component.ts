import { Component, HostBinding, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('contentState', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('4500ms 300ms ease-out')
        ])
    ])
,
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
export class HomeComponent implements OnInit {
  @HostBinding('@contentState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
