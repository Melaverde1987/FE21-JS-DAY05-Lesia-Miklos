
class Object {
    constructor (name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    showMessage(){
        return "This is " + this.name + ', the age is ' + this.age + ', the weight is ' + this.weight;
    }
} 

class Car extends Object {
    constructor(name, age, weight, brand, model, type, color) {
        super(name, age, weight); //comes from parent class
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.color = color;
        
        
    }//Added new parametars and called them with .this
//printed them out 
    showMessage() {
        return '<br>' + super.showMessage() + ', the brand is ' + this.brand + ', the model is ' + this.model + ', the type is ' + this.color + ', the color is ' + this.type ;
    }
}
//Bike object
class Bike extends Object {
    constructor(name, age, weight, brand, model, type, color, wheels) {
        super(name, age, weight); //comes from parent class
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.color = color;
        this.wheels = wheels;
    }

    showMessage() {
        return '<br>' + super.showMessage() + ', the brand is ' + this.brand + ', the model is ' + this.model + ', the type is ' + this.color + ', the color is ' + this.type + ',the number of wheels are' + this.wheels;
    }
}
//Cat object
class Animal extends Object {
    constructor(name, age, weight, species, breed) {
        super(name, age, weight); //comes from parent class
        this.species = species;
        this.breed = breed;
        
    }

    showMessage() {
        return '<br>' + super.showMessage() + ', the species is ' + this.species + ', the breed is ' + this.breed ;
    }
}
//Fish
class Animals extends Object {
    constructor(name, age, weight, species, breed, type) {
        super(name, age, weight); //comes from parent class
        this.species = species;
        this.breed = breed;
        this.type = type;
    }

    showMessage() {
        return '<br>' + super.showMessage() + ', the species is ' + this.species + ', the breed is ' + this.breed + ',fresh' + this.type;
    }
}
//Proffesion object 
class Job extends Object {
    constructor(name, age, weight, jobposition) {
        super(name, age, weight); //comes from parent class
        this.jobposition = jobposition;
       
}
showMessage() {
    return '<br>' + super.showMessage() + ',I am' + this.jobposition;

}
}


var person1 = new Object ("John", 21, 65);
var person2 = new Car('Limousine', 2, 100, 'Mercedes', 'A1', 'blue');
var person3 = new Bike('bike', 1, 120, 'Honda', 'Zx-10','Bike', 'green' , 2 );
var animal1 = new Animal('Cat', 5, 6, 'Feline', 'domestic cat');
var animal2 = new Animals('Fish', 1, 2, 'Golden', 'domestic', 'water');
var person4 = new Job('Josh', 32, 65, 'developer');



 
document.write(person1.showMessage());
document.write(person2.showMessage());
document.write(animal1.showMessage());
document.write(animal2.showMessage());
document.write(person3.showMessage());
document.write(person4.showMessage());


