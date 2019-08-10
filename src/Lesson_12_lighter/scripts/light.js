

export class Light {
  constructor(target, color = 'aqua', onClick){
    this.target = target;
    this.color = color;
    this.isActive = false;
    this.render();
    this.onClick = onClick;
  }

  render (){
    this.element = document.createElement( 'button' );
    this.element.classList.add( 'traffic-lighter__light');
    this.element.onclick = () => {    
        if(this.onClick){
            this.onClick();
        }   
        this.toggle();       
     }
      this.target.appendChild(this.element);
    }
  

  toggle(){
    if(this.isActive){
      this.toggleOff();
    }else{
      this.toggleOn();
    }
  }

  toggleOn(){
    this.element.style.backgroundColor = this.color;
    this.isActive = true;
  }

  toggleOff(){
    this.element.style.backgroundColor = '';
    this.isActive = false;
  }
}