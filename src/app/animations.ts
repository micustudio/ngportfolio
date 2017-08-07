import { trigger, state, style, transition, animate } from '@angular/animations';

export const headerTrigger = trigger('headerState', [
    state('side-menu', style({    
        transform: 'translateX(0%)'
      })),
    state('navigate', style({    
          transform: 'translateX(0%)'
      })),
    state('return', style({    
        transform: 'translateY(-0%)'
      })),

      transition('* => enter', [
        style({
          opacity: 0
        }),
        animate('300ms ease-out'),
        style({
          opacity: 100
        })
        ]),
        
        transition('* => side-menu', [
        style({
              transform: 'translateX(-100%)'
        }),
        animate('500ms cubic-bezier(0.77, 0.2, 0.05, 1.0)')
        ]),

        transition('* => navigate', [

        animate('500ms cubic-bezier(0.77, 0.2, 0.05, 1.0)', style({
              transform: 'translateX(-100%)'
        }))
        ]),

        transition('* => return', [
        style({
              transform: 'translateY(-100%)'
        }),
        animate('200ms cubic-bezier(0.77, 0.2, 0.05, 1.0)')
        ]),
    ])

export const x1Trigger = trigger('x1State', [
    state('navigate', style({    
          opacity: '1',
          background: '#666666'
        })),
    state('side-menu', style({    
          opacity: '1',
          transform: 'rotate(45deg) translate(2px, -3px)',
          background: '#FEFEFE'
        })),
    transition('* => side-menu', [
      animate('500ms ease-out')])

])

export const x2Trigger = trigger('x2State', [
    state('navigate', style({    
          opacity: '1',
          background: '#666666'
        })),
    state('side-menu', style({    
          opacity: 0,
          transform: 'rotate(0deg) scale(0.2, 0.2)'
          })),
    transition('* => side-menu', [
      animate('500ms ease-out')])
])

export const x3Trigger = trigger('x3State', [
    state('navigate', style({    
      opacity: '1',
      background: '#666666'
    })),
    state('side-menu', style({    
          opacity: '1',
          transform: 'rotate(-45deg) translate(0px, 0px)',
          background: '#FEFEFE'
        })),
    transition('* => side-menu', [
      animate('500ms ease-out')])
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
            width: '2px',
            height: '12%',
            opacity: 1,
            transform: 'translateY(0)'
          })
        ),
        animate('300ms ease-out',
            style({
              opacity: 1,
              width: '100%',
              transform: 'translateY(0%)'
            })
        )
        ]),
    ])

export const contentTrigger = trigger('contentState', [
      state('hidden', style({
        transform: 'scale(.95)',
        opacity: 0
      })),
      transition('* => enter', [
    
        animate('300ms ease-out'),
        style({
          transform: 'scale(1)',
          opacity: 1
        })
        ]),
    ])