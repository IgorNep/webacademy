export class Person{
  constructor(name, age, gender){
    this.drinkCount = 0;
    this.name = name;
    this.age = age;
    this.gender = gender;   
    this.isDrunk = false; 
  }
  greet(){
    return `Hello my name is ${this.name}`;
  }
  drink(){
    this.drinkCount +=1;
    if(this.drinkCount > 4){
      this.isDrunk = true;
    }
  }
}