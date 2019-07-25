/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Eplicit - we can choose what 'this' keyword is assigned to --> .call(), .apply(), OR bind();
* 2. Implicit - the JS system *automatically* assigns 'this' to the left of the (dot) '.'; 
* 3. Global(Window) - the value of this === the entire window, this can be visualized by opening DevTools > Console > enter Window
* 4. New - constructs a NEW object;
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
};
sayName("Benjamin");

// Principle 2
// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`)
        console.log(this);
    }
};
myObj.sayHello('Ben'); //object to the left of the dot === myObj

// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    }
};
const benny = new CordialPerson('Benny');
benny.speak();

// Principle 4
// code example for Explicit Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    }
};
const benny = new CordialPerson('Benny');
benny.speak.call(Benny);