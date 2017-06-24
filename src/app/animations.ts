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

export const contentTrigger = trigger('contentState', [
      state('hidden', style({opacity: 0})),
      transition('* => enter', [
        animate('300ms ease-out'),
        style({opacity: 1})
        ]),
    ])



// export const navigateTrigger = trigger('contentState', [
//       state('leave', style({
//         opacity: 0
//       })),
//       state('enter', style({
//         opacity: 1
//       })),
//       transition('* => enter', [
//         style({
//           opacity: 0
//         }),
//         animate('1000ms 300ms ease-out')
//         ]),
//       transition('void => enter', [
//         style({
//           opacity: 0
//         }),
//         animate('1000ms 300ms ease-out')
//         ]),
//         transition('* => leave', animate('500ms 300ms ease-out'))
        
//     ])