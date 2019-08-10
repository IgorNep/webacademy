



import './Lesson_12_lighter.scss';
import { TrafficLighterES6 } from './scripts/traffic_lighter';
import { LighterControler } from './scripts/lighterController';
import { Light } from './scripts/light';
 
const control = new LighterControler(document.querySelector('body'));
const somelight = new Light(document.querySelector('body'), 'pink');
const somelight1 = new Light(document.querySelector('.footer'), 'red');
// const somelight2 = new Light(document.querySelector('body'),'yellow');
// const somelight3 = new Light(document.querySelector('body'),'green');

console.log(somelight);
console.log(somelight1);
