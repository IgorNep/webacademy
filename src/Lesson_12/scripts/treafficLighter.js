function TraficLighter(targetElement) {
  const colors =['red','yellow','green'];
  const lights = [];
  let lighter;

function render(){
  lighter = document.createElement('div');
  lighter.classList.add('traffic-lighter');
  lighter.id = 'lighter1';
  targetElement.appendChild(lighter);
}

function renderLights(){
  for(let color of colors){
    const light = document.createElement('button');
    light.classList.add('traffic-lighter__light', `traffic-lighter__light_${color}`);
    light.onclick = toggle;
    lights.push(light);
    lighter.appendChild(light);
  }
}

  function toggleOffAll() {
    for (const light of lights) {
      light.classList.remove('active');
    }
  }

  function toggle() {
    toggleOffAll();
    console.log(this);
    this.classList.add('active');
  }

  this.disable = function () {
    toggleOffAll();
  }

  render();
  renderLights();
}

export { TraficLighter };
