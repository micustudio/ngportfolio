import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
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
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
