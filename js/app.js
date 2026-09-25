///////////////DOM MANIPULATION//////////////////////
//DOM manipulation is the process of using computer code—most commonly JavaScript—to dynamically alter, add, delete, or modify the structure, content, and styling of a webpage.
let x = 10;
let y = 20;
console.log(x + y);

function myFunction(){
    console.log("This is not a drill");
}

myFunction();

//constructor is simply a "lifecycle" method that is automatically called when an object of a class is created

class Customer{
    name;
    age;
    address;

    constructor(name,age,address){  //there are 2 types of constructors,       default and argument constructor. Default constructor is a constructor that does not take any parameters, while an argument constructor is a constructor that takes parameters.
        this.name = name;
        this.age = age;
        this.address= address;
    }
}
let customer1 = new Customer("John doe", 23, "124 Main street");
console.log(customer1);

let customer2 = new Customer("James smith", 45, "Moratuwa");
console.log(customer2);

console.log(typeof customer1);
console.log(typeof customer2);
