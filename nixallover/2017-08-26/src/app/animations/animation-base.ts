import { trigger, state, style, animate, transition } from '@angular/animations';

export const animationBase = (triggerName, inState, outState) => {
 return (duration = 500, delay = 0) => trigger(triggerName, [
    state('in', style( inState )),
    transition(':enter', [ style( outState ), animate( duration ) ]),
    transition(':leave', [ animate( duration, style( outState )) ])
  ]);
};