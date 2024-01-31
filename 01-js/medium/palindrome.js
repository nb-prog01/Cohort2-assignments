/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  // console.log(str.replaceAll(/[^a-zA-Z]+/g,"").trim())
  strArray=str.replaceAll(/[^a-zA-Z]+/g,"").trim().split("");
  let Flag=true;

  for(let i=0;i<(strArray.length);i++){
      if(strArray[i]!==strArray[(strArray.length-1)-i]){
        console.log(i.toString()+" "+strArray[i]+ " "+strArray[(strArray.length-1)-i]+" "+((strArray.length-1)-i).toString())
        console.log("not PalinDrome")
        Flag=false
        break;
      }
    }
    return Flag
  }

// isPalindrome("fOqoif")

module.exports = isPalindrome;
