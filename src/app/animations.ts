import { trigger, state, style, transition, animate } from '@angular/animations';

export const headerTrigger = trigger('headerState', [
      transition('* => enter', [
        style({
          opacity: 0
        }),
        animate('300ms ease-out'),
        style({
          opacity: 100
        })
        ])
        
    ])

export const linkColorTrigger = trigger('linkColorState', [
      transition('* => contrast', [
        animate('300ms ease-out'),
        style({
          'font-size': '100px'
        })
        ])
        
    ])

export const backgroundTrigger = trigger('backgroundState', [
      state('leave', style({
         opacity: 0
       })),
      transition('* => show', [
        style({
          opacity: 0
        }),
        animate('600ms 300ms ease-out'),
        style({opacity: 1})
        ]),
        transition('* => leave', animate('200ms 100ms ease-out', style({
         opacity: 0
       })))
    ])

export const overlayTrigger = trigger('overlayState', [
      state('hidden', style({
        padding: 0,
        opacity: 0,
        width: '1px',
        height: '10%',
        transform: 'translateY(1000%)'
      })),
      transition('* => enter', [
        animate('300ms ease-out',         
          style({
            width: '1px',
            height: '12%',
            opacity: 1,
            transform: 'translateY(0%)'
          })
        ),
        animate('300ms ease-out',
            style({
              opacity: 1,
              width: '90%',
              transform: 'translateY(0%)'
            })
        )
        ]),
    ])

export const contentTrigger = trigger('contentState', [
      state('hidden', style({
        display: 'none',
        opacity: 0
      })),
      transition('* => enter', [
    
        animate('300ms ease-out'),
        style({
          opacity: 1
        })
        ]),
    ])