// import './homeTask_11.scss';


const btn = document.createElement('button');
btn.className = 'btn';
btn.appendChild(document.createTextNode('Add paragraph'));

const btn2 = document.createElement('button');
btn2.className = 'btn';
btn2.appendChild(document.createTextNode('Delete paragraph'));

const body = document.querySelector('body');
console.log(body);
body.appendChild(btn);
body.appendChild(btn2);

btn.onclick = function addPar(){
  let par = document.createElement('p');
  par.appendChild(document.createTextNode(' Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia minus eveniet nesciunt officiis quas placeat voluptate optio incidunt numquam ab nostrum aut tenetur sapiente, ratione vitae tempora esse! Possimus?'));
  body.appendChild(par);
}

btn2.onclick = function removePar(){
 let par = document.querySelector('p');
  body.removeChild(par);
}