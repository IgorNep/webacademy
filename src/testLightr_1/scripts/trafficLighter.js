export class TrafficLighter{
  constructor(target){
    this.target = target;
    this.colors = ['red', 'yellow', 'green'];
    this.lights = [];    
    this.render();
    this.renderLights();
    this.index = 0;   
    this.startAutoSwitch();
    
  }
  startAutoSwitch(){    
    this.intId = setInterval(() => {
      this.toggleOff();
      this.lights[this.changeIndex()].classList.add('active');      
    }, 1000) ;    
  }
  changeIndex(){       
    let result = this.index < 3 ? this.index : this.index = 0;
    this.index++;
    return result; 

 } 
  

 
  render(){
   this.lighter = document.createElement('div');
    this.lighter.classList.add('lighter');
    this.target.appendChild(this.lighter);
    this.lighter.addEventListener('mouseenter', () => {clearInterval(this.intId)});
    this.lighter.addEventListener('mouseleave', () => { this.startAutoSwitch()});
  }
  renderLights(){
    for(let color of this.colors){
      const light = document.createElement('button');
      light.classList.add('light', `light_${color}`);
      this.lights.push(light);
      this.lighter.appendChild(light);
      light.onclick = () => {
        this.toggleOff();
        light.classList.add('active');
       
        
      }
    }
    
  }
 
  toggleOff(){
    for(let light of this.lights){
      light.classList.remove('active');
    }
  }
 
}