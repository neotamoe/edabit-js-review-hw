// number 1
function isEvenOrOdd(num) {
	return num%2===0 ? "even":"odd";
}

// number 2
// this works to take a string of words and split each word into an index of an array
function makeTitle(str) {
  var string = str;
  var newString = string.split(" ");
  console.log('newString:'+ newString);
  for (var i = 0; i < newString.length; i++) {
    newString[i]=firstLetter(newString[i]);
  }
  newString=newString.join(' ');
  console.log('newString-->', newString);
  return newString;
}

// this turns first letter of each word into a capital letter
function firstLetter(string){
  return string = string.charAt(0).toUpperCase() + string.slice(1);
}
