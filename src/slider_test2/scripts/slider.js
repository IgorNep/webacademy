export class Slider{
  constructor(targetElement, color = 'pink', number = '1'){
    this.targetElement = targetElement;
    this.color = color;
    this.number = number;
    this.slides = [];
    this.renderSlide();
    
  }

  renderSlide(){
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.textContent = this.number;
    slide.style.background = this.color;
    this.targetElement.appendChild(slide);
    this.slides.push(slide);
    
  }
  moveSLide(){
console.log(this.slides);
  }
}