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

//pro mode
function pigLatin(str) {
  var string = str.split(' ');
  console.log('string:', string);
  for (var i=0; i<string.length; i++){
    var re = /^[aeiou]$/i;
			if (re.test(string[i].charAt(0))){
    	string[i]=string[i]+"way";
    } else{
      var first = string[i].substring(0,1);
      string[i]=string[i].slice(1)+ first + "ay";
    }
  }
  console.log('string:', string);
  return string.join(' ');
}

function isVowel(aLetter){
  var re = /^[aeiou]$/i;
  return re.test(aLetter);
}
