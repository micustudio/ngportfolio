import { trigger, state, style, transition, animate } from '@angular/animations';

export const headerTrigger = trigger('headerState', [
      transition('* => enter', [
        style({
          opacity: 0
        }),
        animate('1000ms 300ms ease-out'),
        style({
          opacity: 100
        })
        ])
        
    ])

export const navigateTrigger = trigger('contentState', [
      state('leave', style({
        opacity: 0
      })),
      transition('void => enter', [
        style({
          opacity: 0
        }),
        animate('1000ms 300ms ease-out')
        ]),
        transition('* => leave', animate('500ms 300ms ease-out'))
        
    ])