import './Lesson_13.scss';
import { Person } from './person';
import { Guard } from './guard';
import { Developer } from './developer';


const personIgor = new Person('Jack',30,'male');
const guardJack = new Guard('Artur',32,'male');
const developerDima = new Developer('Dima',48, 'male', 'javascript');
console.log(developerDima.toCode());
console.log(personIgor);
console.log(guardJack);

