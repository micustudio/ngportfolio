import { trigger, state, style, transition, animate } from '@angular/animations';

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
        transition('* => leave', animate('500ms 200ms ease-out'))
        
    ])