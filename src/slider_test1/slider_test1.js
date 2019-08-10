import './slider_test1.scss';
const mainBlock = document.createElement('div');
mainBlock.classList.add('main-block');
document.querySelector('body').appendChild(mainBlock);

const header = document.createElement('div');
header.classList.add('header');
mainBlock.appendChild(header);

const buttons = document.createElement('div');
buttons.classList.add('buttons');
mainBlock.appendChild(buttons);

const section = document.createElement('div');
section.classList.add('section');
section.textContent = '1';
header.appendChild(section);

const section2 = document.createElement('div');
section2.classList.add('section2');
section2.textContent = '2';
header.appendChild(section2);

const section3 = document.createElement('div');
section3.classList.add('section3');
section3.textContent = '3';
header.appendChild(section3);

const section4 = document.createElement('div');
section4.classList.add('section4');
section4.textContent = '4';
header.appendChild(section4);

const section5 = document.createElement('div');
section5.classList.add('section5');
section5.textContent = '5';
header.appendChild(section5);


const button = document.createElement('button');
button.classList.add('btn');
button.textContent = '>';
buttons.appendChild(button);

const button2 = document.createElement('button');
button2.classList.add('btn2');
button2.textContent = '<';
buttons.appendChild(button2);

const checkPoints = document.createElement('div');
checkPoints.classList.add('checkpoints');
buttons.appendChild(checkPoints);

const checkPoint1 = document.createElement('div');
checkPoint1.classList.add('checkPoint');
checkPoint1.classList.add('active');
checkPoints.appendChild(checkPoint1);

checkPoint1.onclick = function () {
  let indexNumber = 0 + 'px';
  section.style.transform = `translateX(${indexNumber})`;
  section.style.transition = 'all 1s ease';
  section2.style.transform =`translateX(${indexNumber})`;
  section2.style.transition = 'all 1s ease';
  section3.style.transform = `translateX(${indexNumber})`;
  section3.style.transition = 'all 1s ease';
  section4.style.transform = `translateX(${indexNumber})`;
  section4.style.transition = 'all 1s ease';
  section5.style.transform = `translateX(${indexNumber})`;
  section5.style.transition = 'all 1s ease';
  console.log(indexNumber);
  index = 0;

  checkPoint1.classList.add('active');
    checkPoint2.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');  
    checkPoint5.classList.remove('active');
  
}

const checkPoint2 = document.createElement('div');
checkPoint2.classList.add('checkPoint');
checkPoints.appendChild(checkPoint2);

checkPoint2.onclick = function () {
  let indexNumber = -600 + 'px';
  section.style.transform = `translateX(${indexNumber})`;
  section.style.transition = 'all 1s ease';
  section2.style.transform =`translateX(${indexNumber})`;
  section2.style.transition = 'all 1s ease';
  section3.style.transform = `translateX(${indexNumber})`;
  section3.style.transition = 'all 1s ease';
  section4.style.transform = `translateX(${indexNumber})`;
  section4.style.transition = 'all 1s ease';
  section5.style.transform = `translateX(${indexNumber})`;
  section5.style.transition = 'all 1s ease';
  console.log(indexNumber);
  index = 1;

  checkPoint2.classList.add('active');
  checkPoint1.classList.remove('active');
  checkPoint3.classList.remove('active');
  checkPoint4.classList.remove('active');  
  checkPoint5.classList.remove('active');
}

const checkPoint3 = document.createElement('div');
checkPoint3.classList.add('checkPoint');
checkPoints.appendChild(checkPoint3);

checkPoint3.onclick = function () {
  let indexNumber = -1200 + 'px';
  section.style.transform = `translateX(${indexNumber})`;
  section.style.transition = 'all 1s ease';
  section2.style.transform =`translateX(${indexNumber})`;
  section2.style.transition = 'all 1s ease';
  section3.style.transform = `translateX(${indexNumber})`;
  section3.style.transition = 'all 1s ease';
  section4.style.transform = `translateX(${indexNumber})`;
  section4.style.transition = 'all 1s ease';
  section5.style.transform = `translateX(${indexNumber})`;
  section5.style.transition = 'all 1s ease';
  console.log(indexNumber);
  index = 2;

  checkPoint3.classList.add('active');
  checkPoint2.classList.remove('active');
  checkPoint1.classList.remove('active');
  checkPoint4.classList.remove('active');  
  checkPoint5.classList.remove('active');
}

const checkPoint4 = document.createElement('div');
checkPoint4.classList.add('checkPoint');
checkPoints.appendChild(checkPoint4);

checkPoint4.onclick = function () {
  
  let indexNumber = -1800 + 'px';
  section.style.transform = `translateX(${indexNumber})`;
  section.style.transition = 'all 1s ease';
  section2.style.transform =`translateX(${indexNumber})`;
  section2.style.transition = 'all 1s ease';
  section3.style.transform = `translateX(${indexNumber})`;
  section3.style.transition = 'all 1s ease';
  section4.style.transform = `translateX(${indexNumber})`;
  section4.style.transition = 'all 1s ease';
  section5.style.transform = `translateX(${indexNumber})`;
  section5.style.transition = 'all 1s ease';
  console.log(indexNumber);
  index = 3;

  checkPoint4.classList.add('active');
  checkPoint2.classList.remove('active');
  checkPoint3.classList.remove('active');
  checkPoint1.classList.remove('active');  
  checkPoint5.classList.remove('active');
  
}

const checkPoint5 = document.createElement('div');
checkPoint5.classList.add('checkPoint');
checkPoints.appendChild(checkPoint5);

checkPoint5.onclick = function () {
  let indexNumber = -2400 + 'px';
  section.style.transform = `translateX(${indexNumber})`;
  section.style.transition = 'all 1s ease';
  section2.style.transform =`translateX(${indexNumber})`;
  section2.style.transition = 'all 1s ease';
  section3.style.transform = `translateX(${indexNumber})`;
  section3.style.transition = 'all 1s ease';
  section4.style.transform = `translateX(${indexNumber})`;
  section4.style.transition = 'all 1s ease';
  section5.style.transform = `translateX(${indexNumber})`;
  section5.style.transition = 'all 1s ease';
  console.log(indexNumber);
  index = 4;

  checkPoint5.classList.add('active');
  checkPoint2.classList.remove('active');
  checkPoint3.classList.remove('active');
  checkPoint4.classList.remove('active');  
  checkPoint1.classList.remove('active');
}

let index = -1;
let y;
let x;
button.onclick = function (){
  if(index === 4){
    index = -1;
  } 
  if(index >= -1 && index <=3 ){
  y = (-600 * (++index)) + 'px';
  section.style.transform = `translateX(${y})`;
  section.style.transition = 'all 1s ease';
  section2.style.transform = `translateX(${y})`;
  section2.style.transition = 'all 1s ease';
  section3.style.transform = `translateX(${y})`;
  section3.style.transition = 'all 1s ease';
  section4.style.transform = `translateX(${y})`;
  section4.style.transition = 'all 1s ease';
  section5.style.transform = `translateX(${y})`;
  section5.style.transition = 'all 1s ease'; 
  }  
   
  if(index === 0){
    checkPoint1.classList.add('active');
    checkPoint2.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');  
    checkPoint5.classList.remove('active');
    }else if(index === 1){     
      checkPoint2.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint3.classList.remove('active');
      checkPoint4.classList.remove('active');  
      checkPoint5.classList.remove('active');
    }else if(index === 2){     
      checkPoint3.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint2.classList.remove('active');
      checkPoint4.classList.remove('active');  
      checkPoint5.classList.remove('active');
    }else if(index === 3){     
      checkPoint4.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint3.classList.remove('active');
      checkPoint2.classList.remove('active');  
      checkPoint5.classList.remove('active');
    }else if(index === 4){     
      checkPoint5.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint2.classList.remove('active');
      checkPoint3.classList.remove('active');  
      checkPoint4.classList.remove('active');
    }

  console.log(y);
  console.log(index);
}
button.onmouseenter = function(){
  clearInterval(intervalId);
}
button.onmouseleave = function(){
  intervalId = setInterval(autoSwitch, 3000);
}



button2.onclick = function (){
  if(index === 0){
    index = 5;
  } 
  if(index > 0 && index <= 5){
  y = (-600 * (--index)) + 'px';
  section.style.transform = `translateX(${y})`;
  section.style.transition = 'all 1s ease';
  section2.style.transform = `translateX(${y})`;
  section2.style.transition = 'all 1s ease';
  section3.style.transform = `translateX(${y})`;
  section3.style.transition = 'all 1s ease';
  section4.style.transform = `translateX(${y})`;
  section4.style.transition = 'all 1s ease';
  section5.style.transform = `translateX(${y})`;
  section5.style.transition = 'all 1s ease'; 
  }  
   
  if(index === 0){
    checkPoint1.classList.add('active');
    checkPoint2.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');  
    checkPoint5.classList.remove('active');
    }else if(index === 1){     
      checkPoint2.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint3.classList.remove('active');
      checkPoint4.classList.remove('active');  
      checkPoint5.classList.remove('active');
    }else if(index === 2){     
      checkPoint3.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint2.classList.remove('active');
      checkPoint4.classList.remove('active');  
      checkPoint5.classList.remove('active');
    }else if(index === 3){     
      checkPoint4.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint3.classList.remove('active');
      checkPoint2.classList.remove('active');  
      checkPoint5.classList.remove('active');
    }else if(index === 4){     
      checkPoint5.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint2.classList.remove('active');
      checkPoint3.classList.remove('active');  
      checkPoint4.classList.remove('active');
    }  
  }

  button2.onmouseenter = function(){
    clearInterval(intervalId);
  }
  button2.onmouseleave = function(){
    intervalId = setInterval(autoSwitch, 3000);
  }

  let intervalId = setInterval(autoSwitch, 3000);

  function autoSwitch(){
    index === 4 ? index = -1 : index; 
    index++;
    if(index === 0){
    checkPoint1.classList.add('active');
    checkPoint2.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');  
    checkPoint5.classList.remove('active');
    }else if(index === 1){     
      checkPoint2.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint3.classList.remove('active');
      checkPoint4.classList.remove('active');  
      checkPoint5.classList.remove('active');
    }else if(index === 2){     
      checkPoint3.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint2.classList.remove('active');
      checkPoint4.classList.remove('active');  
      checkPoint5.classList.remove('active');
    }else if(index === 3){     
      checkPoint4.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint3.classList.remove('active');
      checkPoint2.classList.remove('active');  
      checkPoint5.classList.remove('active');
    }else if(index === 4){     
      checkPoint5.classList.add('active');
      checkPoint1.classList.remove('active');
      checkPoint2.classList.remove('active');
      checkPoint3.classList.remove('active');  
      checkPoint4.classList.remove('active');
    }
    

  y = (-600 * index) + 'px';  
  section.style.transform = `translateX(${y})`;
  section.style.transition = 'all 1s ease';
  section2.style.transform = `translateX(${y})`;
  section2.style.transition = 'all 1s ease';
  section3.style.transform = `translateX(${y})`;
  section3.style.transition = 'all 1s ease';
  section4.style.transform = `translateX(${y})`;
  section4.style.transition = 'all 1s ease';
  section5.style.transform = `translateX(${y})`;
  section5.style.transition = 'all 1s ease';
  }

 header.onmouseenter = function(){
    clearInterval(intervalId);
  }
 header.onmouseleave = function(){
    intervalId = setInterval(autoSwitch, 3000);
  }

  checkPoints.onmouseenter = function(){
    clearInterval(intervalId);
  }
  checkPoints.onmouseleave = function(){
    intervalId = setInterval(autoSwitch, 3000);
  }
