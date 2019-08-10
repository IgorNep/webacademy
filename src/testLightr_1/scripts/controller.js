import { TrafficLighter } from './trafficLighter';

export class Controller{
  constructor(targetElement){
    this.targetElement = targetElement;
    this.render();
    this.renderButtons();
  }

  render(){
    const container = document.createElement('div');
    this.header = document.createElement('header');
    this.content = document.createElement('div');
    this.content.classList.add('flexBlock');
    container.appendChild(this.header);
    container.appendChild(this.content);
    this.targetElement.appendChild(container);  
    
  }

  renderButtons(){
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    this.header.appendChild(addButton);
    addButton.onclick = () => { 
      this.addNewLighter();
    }    
  }

  addNewLighter(){
   const lighter = new TrafficLighter(this.content);
  }
 
}