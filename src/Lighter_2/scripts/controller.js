import { TrafficLighter } from './trafficLighter';
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
    this.content.classList.add('flexing');
    container.appendChild(this.header);
    container.appendChild(this.content);
    this.targetElement.appendChild(container);
  }
  renderButtons(){
    const addBtn = document.createElement('button');
    addBtn.innerText = '+';
    this.header.appendChild(addBtn);

    addBtn.onclick = () => {
      this.addLighter()
      
    };
    const toggleOffAll = document.createElement('button');
    toggleOffAll.textContent = 'Off';    
    this.header.appendChild(toggleOffAll);

    toggleOffAll.onclick = () =>{
      this.toggleOffAll();
    }
  }
  addLighter(){
    const lighter = new TrafficLighter(this.content);
    this.lighters.push(lighter);
    
    
  }
 toggleOffAll(){
   for(let lighter of this.lighters){
     lighter.toggleOff();
   }
 }
}