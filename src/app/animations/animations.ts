import { trigger, state, style, transition, animate } from '@angular/animations';

 

export const tutorialanimations = [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(100%)',
              opacity: 0}),
      animate('100ms ease-in' )
    ]),
    transition('* => void', [
      animate('100ms ease-in', style({transform: 'translateX(100%)'}))
    ])
  ]),
  trigger('fadeIn', [
    state('in', style({opacity: 100})),
    transition('void => *', [
      style({opacity: 0}),
      animate('2s')
    ])
  ])
  
];