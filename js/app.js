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
        this.name = name;  //inject parameters
        this.age = age;
        this.address= address;
    }
}
let customer1 = new Customer("Ichigo Kurosaki", 15, "124 Main street");
console.log(customer1);

    alert("Welcome to Soul Socity BITCH");

let customer2 = new Customer("Kuchiki Rukia", 145, "Moratuwa");
console.log(customer2);

console.log(typeof customer1);
console.log(typeof customer2);

//ARRAY LISTT/////
let Student = [
    {
        name: "Ichigo",
        age:19,
        address:"123 main street"
    },
    {
        name: "Rukia",
        age: 20,
        address: "456 main street",
        marks:[
            {
                subject:"maths",
                mark:90,
                subMark:[
                {
                substudent:"Siyath"
                }
            ]
        }
        ]
    },
    {
        name: "Renji",
        age: 21,
        address: "789 main street"
    },
    {
        name:"Yourichi",
        age:89,
        address:"34 HillStreet"
    } 
]
console.log(Student);
console.log(Student[1].marks[0].mark);
console.log(Student[1].name);
console.log(Student[2].address);

console.log(document); //a detailed description of the parameters/behaviours used in ur html doc
document.write("<p><b>HII ICET<b></p>");
document.write("<p>HIIIIIIIIIIIIIIIIIIIII</p>")

let title = document.getElementById("title")
console.log(title)
title.innerText = "EUREKA"


///////////////DOM MANIPULATION/////DOcument Object MANIPULATION/////
