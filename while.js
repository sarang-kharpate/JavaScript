// Syntax of while loop
//
// while (true) {
//   //Execute Some Code while this condition is true
// }
//
// We can use keyword break to break out of while loop manually


//Example
var x=0;

while (x<5){
  console.log("x is currently: "+x);
  console.log("x is still less than five, adding 1 to x");

  x=x+1;
}

//Example break
var x = 0;

while (x<5) {

  console.log('X is currently :'+x);

  if (x===3) {
    console.log('X IS EQUAL TO 3, time to break while loop');
    break;
  }

  console.log('X is still less then 5, adding 1 to x'+x);
  x=x+1;
}

//Excercise: Wrie a while loop to print only even number from 1 to 10
var x=0;

while (x<=10){

  if (x%2===0) {
    console.log(x+' Is a even Number');
  }

  x=x+1;
}
