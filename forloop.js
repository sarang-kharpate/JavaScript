// for loop
//
// for (statement1; statement2; statement3) {
//   //Execute some code
// }
//
// //Sample for loop in Javascripts looks like below
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
//
// Statement1 starts before the loop begins;
// statement2 defines the condition for ForLoop;
// statement3 Runs after the loop ends

//Example one :
for (var i = 0; i < 5; i++) {
  console.log("Number is :"+i);
}

//Example 2;
//
var words='ABCDEFGHIJKLMNOPQRSTUVWXYX'

for (var i = 0; i < words.length; i++) {
 if (i%2 === 0) {
  console.log('Even placed words are '+words[i]);
 }
}

/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

While Loop
var i = 0;

while (i < 5) {
  console.log('Hello');
  i+=1;
}


// For Loop
for (var i = 0; i < 5; i++) {
  console.log('Hello');
}



/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var i = 1
while (i < 26) {
  if (i%2 != 0){
    console.log(i);
  }
  i+=1;
}


// METHOD TWO
// For Loop
for (var i = 1; i < 26; i+=2) {
  console.log(i);
}
