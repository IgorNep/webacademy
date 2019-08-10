import { TrafficLighter } from './trafficLighter';

export class Controller {
  constructor(targetElement){
    this.targetElement = targetElement;
    this.render();
    this.renderButtons();
  }
  render(){
    const container = document.createElement('div');
    this.header = document.createElement('header');
    this.content = document.createElement('div');
    container.appendChild(this.header);
    container.appendChild(this.content);
    this.targetElement.appendChild(container);
   
  }
  renderButtons(){
   this.addButton = document.createElement('button');
    this.addButton.textContent = '+';
    this.header.appendChild(this.addButton);

    this.addButton.onclick = () => {
      this.addNewTrafficLighter();
    }
  }
  addNewTrafficLighter(){
    const trafficLighter = new TrafficLighter(this.content);
  }
}