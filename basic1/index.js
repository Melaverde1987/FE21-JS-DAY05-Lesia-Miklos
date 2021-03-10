// Create 3 different classes:  car, animal and person. These classes should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

// Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// Create, using the classes, 3 different objects for each class.

// The results from the methods must be printed on the browser too.



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
 
//car object
class Car extends Object {
    constructor(name, age, weight, brand, model, type, color) {
        super(name, age, weight); //comes from parent class
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.color = color;
    }
//printing out the message
    showMessage() {
        return '<br>' + super.showMessage() + ', the brand is ' + this.brand + ', the model is ' + this.model + ', the type is ' + this.type + ', the color is ' + this.type;
    }
}

class Animal extends Object {
    constructor(name, age, weight, species, breed) {
        super(name, age, weight); //comes from parent class
        this.species = species;
        this.breed = breed;
    }

    showMessage() {
        return '<br>' + super.showMessage() + ', the species is ' + this.species + ', the breed is ' + this.breed;
    }
}
 

var person1 = new Object ("John", 21, 65);
var person2 = new Car('Limousine', 2, 100, 'Mercedes', 'A1', 'car', 'blue');
var animal1 = new Animal('Cat', 5, 6, 'Feline', 'domestic cat');

document.write(person1.showMessage());
document.write(person2.showMessage());
document.write(animal1.showMessage());

