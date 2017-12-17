import { animationBase } from './animation-base';

export var fadeBack = animationBase(
  'fadeBack', 
  { 
    opacity: 1,
    transform: 'scale(1) translateY(0, 0)'
    //transform: 'scale(1)'
  }, 
  { 
    opacity: 0,
    transform: 'scale(.9) translateY(100px)'
    //transform: 'scale(.97)'
  }
);