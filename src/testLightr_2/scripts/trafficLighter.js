export class TrafficLighter{
  constructor(targetElement){
    this.targetElement = targetElement;
    this.colors = ['red','yellow','green'];
    this.lights = [];
    this.index = 3;
    this.render();
    this.renderLights();
    this.autoSwitch();
  }
  autoSwitch(){    
    this.setInterval();
  }
  setInterval(){
    this.intervalId = setInterval(() => {
      this.toggleOff();
      this.lights[this.indexOfColor()].classList.add('active');      
    }, 1000); 
    
  }
  indexOfColor(){
    this.index++;
    return this.index < 3 ? this.index : this.index = 0;
  } 

  render(){
    this.lighterBox = document.createElement('div');
    this.lighterBox.classList.add('lighterBox');    
    this.targetElement.appendChild(this.lighterBox);

    this.lighterBox.onmouseenter =  () => {
      clearInterval(this.intervalId)};
    this.lighterBox.onmouseleave =  () => {
     this.autoSwitch();
    };

  }
  renderLights(){
    for(let color of this.colors){
      const light = document.createElement('button');
      light.classList.add('lighterBox__light', `lighterBox__light_${color}` );
      this.lights.push(light);
      this.lighterBox.appendChild(light);
      light.onclick = () => {
       if(light.classList.contains('active')){
         this.toggleOff();
       }else{
        this.toggleOff();
        light.classList.add('active');
       }      
      }
    }
  }
  toggleOff(){
    for(let light of this.lights){
      light.classList.remove('active');
    }    
  }
  
}