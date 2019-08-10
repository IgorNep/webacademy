import './lesson_12.scss';
import { TraficLighter } from './scripts/treafficLighter';

const test = [];
const lighter = new TraficLighter(document.querySelector('.container'));
const lighter2 = new TraficLighter(document.querySelector('.container'));
console.log(lighter);
window.lighter = lighter;
