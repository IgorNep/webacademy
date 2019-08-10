import { Slider } from './slider';
export class SliderBlock{
  constructor(targetElement, howMany = 1){ // куда вставить и сколько слайдов
    this.targetElement = targetElement;
    this.howMany = howMany;
    this.sliders = [];
    this.points = [];
    this.slideIndex = 0;
    this.index = 0;            
    this.render();
    this.renderButtons();
    this.renderPoints();
    this.addNewSlide();
    this.autoSwitch();
  }
  
 autoSwitch(){
  this.intervalId = setInterval(() => {this.changeSlide()  
  }, 2000);  
 }  
 stopAutoSwitch(){
   clearInterval(this.intervalId);
 }
  changeSlide(){    
    this.slideIndex++;
    if(this.slideIndex === this.sliders.length){    
      this.slideIndex = 0;
    }
    for(let i = 0; i < this.sliders.length; i++){
      this.sliders[i].slides[0].style.transform = 'translateX(' + -600*this.slideIndex + 'px)';         
    }  
    this.toggleOff();    
    this.points[this.slideIndex].classList.add('active');
  }
  pointChanger(){      
    for(let i = 0; i < this.sliders.length; i++){
      this.sliders[i].slides[0].style.transform = 'translateX(' + -600*this.slideIndex + 'px)';         
    }      
  }
  toggleOff(){
    for(let point of this.points){
      point.classList.remove('active');
    }
  }
  number(){
    this.index++;
     while(this.index <= this.howMany){
       return this.index;
      }     
  }  

  colors(){
    let color;
    let result = [];
    for(let i = 0; i < 3; i++){
      result[i] = (Math.round(Math.random()*255));    
    }
    color = `rgb(${result[0]},${result[1]},${result[2]})`;
    return color;
    console.log(color);
  }
  render(){
    const mainBlock = document.createElement('div');
    mainBlock.classList.add('main-block');
    this.targetElement.appendChild(mainBlock);
    this.header = document.createElement('header');
    this.content = document.createElement('div');
    this.header.classList.add('header');
    this.content.classList.add('content');
    mainBlock.appendChild(this.header);
    mainBlock.appendChild(this.content);

    this.header.onmouseenter = () => {
      this.stopAutoSwitch();
    } 
    this.header.onmouseleave = () => {
      this.autoSwitch();
    }
  }
  renderButtons(){
    const btn1 = document.createElement('div');
    btn1.classList.add('btn1');
    btn1.textContent = '<';
    const btn2 = document.createElement('div');
    btn2.classList.add('btn2');
    btn2.textContent = '>';
    this.content.appendChild(btn1);
    this.content.appendChild(btn2);
    
    btn1.onclick = () => {
      this.prevSlide();
    }
    btn2.onclick = () => {
      this.nextSlide();
    }
    btn1.onmouseenter = () => {
      this.stopAutoSwitch();
    }
    btn1.onmouseleave = () => {
      this.autoSwitch();
    }
    btn2.onmouseenter = () => {
      this.stopAutoSwitch();
    }
    btn2.onmouseleave = () => {
      this.autoSwitch();
    }
  }
  nextSlide(){
    this.slideIndex++;
    if(this.slideIndex === this.sliders.length){    
      this.slideIndex = 0;
    }
    for(let i = 0; i < this.sliders.length; i++){
      this.sliders[i].slides[0].style.transform = 'translateX(' + -600*this.slideIndex + 'px)';         
    }   
    this.toggleOff();    
    this.points[this.slideIndex].classList.add('active');         
  }
  prevSlide(){
    this.slideIndex--;
    if(this.slideIndex === -1){    
      this.slideIndex = this.sliders.length - 1;
    }
    for(let i = 0; i < this.sliders.length; i++){
      this.sliders[i].slides[0].style.transform = 'translateX(' + -600*this.slideIndex + 'px)';         
    }    
    this.toggleOff();    
    this.points[this.slideIndex].classList.add('active');      
  }
  renderPoints(){
    this.pointBlock = document.createElement('div');
    this.pointBlock.classList.add('point-block');
    this.content.appendChild(this.pointBlock);   
    
    for(let i = 0; i < this.howMany; i++){
      const point = document.createElement('div');
      point.classList.add('point');
      this.pointBlock.appendChild(point);
      this.points.push(point);
      
      point.onclick = () => {
        this.toggleOff();
        point.classList.add('active');
        this.slideIndex = this.points.indexOf(point);
        console.log(this.slideIndex);
        this.pointChanger();
      } 
      point.onmouseenter = () => {
        this.stopAutoSwitch();
      } 
      point.onmouseleave = () => {
        this.autoSwitch();
      }

    }
    this.points[0].classList.add('active');
  }

  addNewSlide(){
    for(let i = 0; i < this.howMany; i++){
      const slider = new Slider(this.header, this.colors(), this.number());      
      this.sliders.push(slider);
    }  
    console.log(this.sliders);
  }
}