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
    state('hidden', style({display: 'none', opacity: '0'})),
    state('visible', style({display: '*', opacity: '1'})),
    transition('hidden <=> visible', [
      animate('3s')
    ]),
    transition('void => hidden', [animate('20ms')])
  ]),
  trigger('backgroundFadeIn', [
    state('hidden', style({backgroundColor: 'rgba(0,0,0,0)'})),
    state('visible', style({backgroundColor: '*'})),
    transition( 'hidden => visible', [
      animate('3s')
    ]),
  ])
  
];