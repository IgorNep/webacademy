export class TrafficLighter{
  constructor(targetElement){
    this.targetElement = targetElement;
    this.colors = ['red','yellow','green'];
    this.lights = [];   
    this.render();
    this.renderLights();   
  }
  
  
  render(){
    this.container = document.createElement('div');
    this.container.classList.add('lighter');
    this.targetElement.appendChild(this.container);
  }
  renderLights(){
    for(let color of this.colors){
      const light = document.createElement('button');
      light.classList.add('lighter__light', `lighter__light_${color}`);
      light.onclick = () => {
        if(light.classList.contains('active')){
          light.classList.remove('active');
        }
        else{
          this.toggleOff();
          light.classList.add('active');
        }
        
      }
      this.lights.push(light);
    }
    for(let light of this.lights){
       this.container.appendChild(light);      
    }    
  }

  toggleOff(){
    for(let light of this.lights){
    light.classList.remove('active');
    }
  }   
}
  

  

