import './slider_test2.scss';

import { SliderBlock } from './scripts/controller';
import { Slider } from './scripts/slider';

const addSlider = document.createElement('button');
document.querySelector('body').appendChild(addSlider);
addSlider.textContent = 'Add new slider';
addSlider.onclick = function addNewSlider(){
  let numberOfSlides = prompt('How many slides do you want?');
  const slider1 = new SliderBlock(document.querySelector('body'), parseInt(numberOfSlides));
}




