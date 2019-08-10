import { TrafficLighterES6 } from "./traffic_lighter";

export class LighterControler {
  constructor(targetElement){
    this.targetElement = targetElement;
    this.lighters = [];
    this.render();
    this.renderButtons();
  }
  render(){
    const container = document.createElement('div');
    this.header = document.createElement('header');
    this.content = document.createElement('div');
    this.content.style.border = '5px solid yellow';
    this.content.style.display = 'flex';

    container.appendChild(this.header);
    container.appendChild(this.content);
    this.targetElement.appendChild(container);

  }
  renderButtons(){
    const addButton = document.createElement('button');
    const toggleOnButton = document.createElement('button');
    const toggleOffButton = document.createElement('button');

    addButton.textContent = '+';
    toggleOnButton.textContent = 'on';
    toggleOffButton.textContent = 'off';

    addButton.onclick = () => {
      this.addLighter();
    }

    toggleOffButton.onclick = () => {
      this.toggleOffAllLighters();
    }
    toggleOnButton.onclick = () => {
      this.toggleOnAllLighters();
    }

    this.header.appendChild(addButton);
    this.header.appendChild(toggleOnButton);
    this.header.appendChild(toggleOffButton);
  }



  toggleOffAllLighters(){
    for(let lighter of this.lighters){
      lighter.toggleOff();
    }
  }
  toggleOnAllLighters(){
    for(let lighter of this.lighters){
      lighter.toggleOn();
    }
  }

  addLighter(){
    const lighter = new TrafficLighterES6(this.content);
    this.lighters.push(lighter);
  }

}