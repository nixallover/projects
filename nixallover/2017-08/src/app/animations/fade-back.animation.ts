//import { animationBase } from './animation-base';

// export const fadeBack = animationBase(
//   'fadeBack', 
//   { 
//     opacity: 1,
//     transform: 'scale(1) translateY(0, 0)'
//     //transform: 'scale(1)'
//   }, 
//   { 
//     opacity: 0,
//     transform: 'scale(.9) translateY(100px)'
//     //transform: 'scale(.97)'
//   }
// );

import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeBack = (duration = 500, delay = 0) => {
  return trigger(
    'fadeBack',
    [
      state('in', style( {
        opacity: 1,
        transform: 'scale(1) translateY(0, 0)'
      } )),
      transition(':enter', [ style({
        opacity: 0,
        transform: 'scale(.9) translateY(100px)'
      }), animate( duration ) ]),
      transition(':leave', [ animate( duration, style({
        opacity: 0,
        transform: 'scale(.9) translateY(100px)'
      })) ])
    ]
  )
};
