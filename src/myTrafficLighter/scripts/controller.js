import {TrafficLighter} from './trafficlighter';
export class Controller{
  constructor(targetElement){
    this.targetElement = targetElement;
    this.render();
    this.renderButtons();
    this.lighters = [];

  }
  render(){
    const container = document.createElement('div');
    this.header = document.createElement('header');
    this.content = document.createElement('div');
    this.content.classList.add('block');


    container.appendChild(this.header);
    container.appendChild(this.content);
    this.targetElement.appendChild(container);
  }
  renderButtons(){
    this.addButton = document.createElement('button');
    this.addButton.textContent = '+';
    this.header.appendChild(this.addButton);
    this.toggleOffAll = document.createElement('button');
    this.toggleOffAll.textContent = 'OFF';
    this.header.appendChild(this.toggleOffAll);

    this.addButton.onclick = () => {
      this.addLighter()    ;
    }
    this.toggleOffAll.onclick = () =>{
        this.toggleOffAllLighters();
    }
  }
  addLighter(){
    const newLighter = new TrafficLighter(this.content); 
    this.lighters.push(newLighter);

  }
  toggleOffAllLighters(){
    for(let lighter of this.lighters){
      lighter.toggleOff();
    }
  }
}