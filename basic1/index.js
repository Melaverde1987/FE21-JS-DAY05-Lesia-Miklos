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
    return  "This is the " + this.name + this.age + '<br>' + this.weight;
}
} 
 

var person1 = new Object ("John", 21, 65);

document.write(person1.showMessage());

