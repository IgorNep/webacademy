
export class TrafficLighter{
  constructor(targetElement){
    this.targetElement = targetElement;
    
    this.lights = [];
    this.lighter = 'asdasd';
    this.colors = ['red','yellow', 'green'];
    this.render();
    this.renderButtons();
  }

  render(){
    this.lighter = document.createElement('div');
    this.lighter.classList.add('lights');
    this.targetElement.appendChild(this.lighter);
    
  }
  renderButtons(){
    for(let color of this.colors){
      const light = document.createElement('button');
      light.classList.add('light', `light_${color}`); 
      this.lights.push(light);      
      this.lighter.appendChild(light);
      light.onclick = () => {
        console.log( '====', this );
        this.toggleOff();
        light.classList.add('active');
      }
      
    }    
  }
  toggleOff(){
    for(let light of this.lights)
        light.classList.remove('active');
  }

}