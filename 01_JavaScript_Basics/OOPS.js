// Object Oriented Programming in JavaScript

// Allows to create objects without defining the class

var bird = {
  x: 100,
  y: 20,
  eggs: [1, 2, 3, 4, 5],
  color: "blue",
  fly: function () {
    console.log("Bird Is Flying", this.x, this.y);
  },
};

// console.log(bird)

// for loop
// for (let i=0;i<bird.eggs.length;i++){
// console.log(bird.eggs[i]);
// }

// for each loop
// bird.eggs.forEach(function(val, idx){
// console.log(idx, val)
// })

// bird.fly()

var apple = {
  taste: "sweet",
  color: "red",
};

function Fruit(taste, color) {
  this.color = color;
  this.taste = taste;
}

let mango = new Fruit("Sweet", "Yellow");
let orange = new Fruit("Sour", "Orange");

// console.log(mango)
// console.log(orange)

// Class keyword (ECMAScript 2015)

class Fruits {
  constructor(taste, color) {
    this.color = color;
    this.taste = taste;
  }
}

let kiwi = new Fruits("Sour", "green");
console.log(kiwi);

// Class Expression
let FruitExp = class {
  constructor(taste, color) {
    this.color = color;
    this.taste = taste;
  }
};
