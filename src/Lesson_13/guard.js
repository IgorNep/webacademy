import { Person } from "./person";

export class Guard extends Person{
  constructor(name, age, gender){
    super(name,age,gender)
  }
 
  fight(){
    console.log('Fight with other!!!');
  }

}