"use strict";

// classes
    // Old way - single object
    // let jim ={
    //     name: "Jim";
    //     age: 53;
    //     city: "Houghton Lake"
    // }

    // New way - reuseable to create many objects
// class Student {
//     constructor(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
//     //any methods
//     sayHello() {
//         console.log(`Hello, I'm ${this.name}.`)
//     }
// };

// let jim = new Student("Jim", 53, "Houghton Lake")
// console.log(jim);
// let Taz = new Student("Taz", 4000, "Warren");
// console.log(Taz);


// class Cars {
//     constructor(make, model, year) {
//         this.carMake = make;
//         this.carModel = model;
//         this.carYear = year;
//     }

// };
// let myCar = new Cars("Ford", "Mustang", 2018);
// console.log(myCar);

// class Foods {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }
//     //any methods
//     nameThatFood() {
//         console.log(`The food's name is ${this.name}`)
//     }
// }

// let ham = new Foods("ham", "pink");
// console.log(ham)
// ham.nameThatFood();

// let lettuce = new Foods("lettuce", "green");
// console.log(lettuce);
// lettuce.nameThatFood();       

// // Prototype

// // Common Methods
// // e.g Debugger
// // debugger;
//  for (let i = 1; i < 11; i++) {
//      console.log(i);
//  }

 class Room {
    constructor(name, length, width, capacity=15) {
        this.roomName = name;
        this.roomLength = length;
        this.roomWidth = width;
        this.available = true;
        this.capacity = capacity;
    }
    // any methods
    getArea() {
        return this.roomLength * this.roomWidth;
    };
    getPerimeter() {
        return 2 * (this.roomWidth + this.roomLength);
    }
 }  
 let room1 = new Room("Sun", 30, 20);
 let room2 = new Room("Green", 15, 20, 18);

 console.log("This is room1's name:", room1.roomName);
 console.log("This is room1's width:", room1.roomWidth);
 console.log("This is room1's length:", room1.roomLength);
 console.log("This is room1's capacity:", room1.capacity);
 console.log("This is room1's area:", room1.getArea());
 console.log("This is room1's perimeter:", room1.getPerimeter());

 console.log("This is room2's name:", room2.roomName);
 console.log("This is room2's width:", room2.roomWidth);
 console.log("This is room2's length:", room2.roomLength);
 console.log("This is room2's capacity:", room2.capacity);
 console.log("This is room2's area:", room2.getArea());
 console.log("This is room2's perimeter:", room2.getPerimeter());

room2.available = false;
console.log("Room1 is available:", room1.available);
console.log("Room2 is available:", room2.available);


