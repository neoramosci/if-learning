/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

 //question 1
 function isItLong(str){
  if(str.length(20)){
    return ("That's a long string!");
  }
 }

// question 2 
function isItMedium(str){
if(str.length >= 10 && str.length <=20){
return "That's a regular sized string!";
}
}

//question 3 
function isItShort(stf){
  if(str.length < 10){
    return "That's a small string!";
  } else {
    return "Thats not a small string!";
  }
}

// question 4 
function howLongIsMyString(str){
if(str.length > 20){
  return "That's a long string!";
} else if (str.length >= 10 && str.length <=20){
  return "That's a regular sized string!";
} else if (str.length < 10){ 
  return "That's a small string!";
}
}

// question 5 
function instructorHeight(str){
  if(str ==="neo"){
    return 62;
  } else if (str === "james"){
  } else {
    return "I don't now that instructor!";
  }
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}