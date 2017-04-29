import { Component, HostBinding, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('contentState', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('200ms 300ms ease-out')
        ])
    ])

  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('@contentState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
