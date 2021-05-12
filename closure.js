// ### Closure

// 1. In your own words, define closure (1-2 sentences).

//Closure gives you access to an outer function’s scope from an inner function and by doing so, it stops those values it access from being forgotten.

// 2. Study the following code, then answer the questions below.

function personalDice(name){
  return function(){  //this is a closure
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();


// * a. Where is closure used in this code? How can you tell?

 // closure here is: return function(){ ... (I marked it on the previous code)

// * b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

//It is always the same the console.logged string that starts with name Dan and rolled a... because we are calling dansRoll variable which is = personalDice("Dan").  `${name} rolled a ${newRoll}

// What changes is the variable newRoll ${newRoll}`, because the variable is subjected to a Math.random() method over a Math.random() * 6, which implies that the dice rolled will throw a random number between 0 and 5 each time, those numbers at the 2 dansRoll calls can be eventually the same because numbers will be always between 0 and 5, so changes of getting the same value at both calls are not so small.

// * c. What is the lexical scope of `newRoll`? this might help https://stackoverflow.com/questions/1047454

//Lexical scope (also called static scope), is where every inner level can access its outer levels. Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has been returned.


// 3. Write a function that would allow you to do this using a closure.

function createBase(outerVariable) {

 return function sum(number) {
     console.log(number + outerVariable);
 }
}

var addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
addSix(40); // returns 46
