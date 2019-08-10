import { Person } from "./person";

export class Developer extends Person{
  constructor(name,age,gender, language){
    super(name,age,gender)
    this.language = language;
    
  }
  toCode(){
    console.log(`I am developed 100 lines of code in ${this.language}`);
  }
}