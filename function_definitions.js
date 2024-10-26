// function printMessage(message){
//     console.log('Your message is : ' + message)
// }

// const printMessage = function(message){
//     console.log('Your message is: ' + message)
// }

// usually don't do above, do below instead
const printMessage = (message) => {
  console.log("Your message is: " + message);
};
// can also use let but usually not going to change when using functions

printMessage("Hello");
printMessage("hi programers");

// function printWlecome() {
//     console.log('welcome!')
// }
// printWlecome()

const printWlecome = () => {
  console.log("welcome!");
};
printWlecome()
