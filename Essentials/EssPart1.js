
//Acts as our class definition - define a constructor
var Squirrel = function(n) {
  this.name = n;
  this.nuts = 0;
};

//Add a method to the Squirrel class
Squirrel.prototype.sayHello = function() {
  console.log("Hello!");
};

//Add another method
Squirrel.prototype.faveFood = function(){
  console.log(this.name + " likes nuts");
};

//And another method
Squirrel.prototype.addNutsToStore = function(newNuts) {
  this.nuts += newNuts;
};

Squirrel.prototype.jump = function() {
  console.log(this.name + " is jumping!")
};


var fluffy = new Squirrel("Fluffy");
var jumpy = new Squirrel("jumpy");//creating new object

jumpy.sayHello(); //sayhello method
jumpy.addNutsToStore(3);
jumpy.addNutsToStore(12);
jumpy.addNutsToStore(40);

 //print the total number of nuts jumpy has


//Call some squirrel methods for fluffy
fluffy.sayHello();
fluffy.addNutsToStore(10);
fluffy.faveFood();
fluffy.addNutsToStore(15);

console.log(fluffy.nuts);

var squeaky = new Squirrel("Squeaky");

squeaky.faveFood();
squeaky.sayHello();
//Can you call addNutsToStore for this Squirrel?



//Adding properties to one Squirrel only
squeaky.tree = "Oak Tree";

console.log("Squeaky's tree is : "+ squeaky.tree);   // "Oak Tree"
//Fluffy doesn't have a tree
console.log("Fluffy's tree is : "+ fluffy.tree);   // "undefined"

//Add a jump method only for fluffy
//fluffy.jump = function() {
//  console.log(this.name + " is jumping!");
//};

//fluffy.jump();//This works

//creating a list of squirrel


// LAB Part 1 - squirrels ********

var squirrels = [
  jumpy,
  squeaky,
  fluffy
];

//console.log(squirrels);

for (i in squirrels) {
    squirrels[i].jump();
}




// squeaky.jump();  //Calling this results in an error - squeaky doesn't have a jump method

