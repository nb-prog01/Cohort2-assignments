/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  //using for loops

    let count=0;
    let vowels=['a','e','i','o','u'];
    str=str.toLowerCase();
    strArray=str.split("");

  for(let i=0;i<strArray.length;i++){
    vowels.forEach((element)=>{if(element==strArray[i]){
      count+=1;
    }})
  }
  console.log(count)
  return count;

  //using regex

  // count=str.match(/[aeiou]/gi);
  // console.log(count)
  // if (count==null){
  //   return 0;
  // }else{
  //   return count.length;
  // }

  

}
// countVowels("qaedcfgtyhjiopwcncpa adsadiao")
// countVowels("");
// countVowels("kjhlgf");

module.exports = countVowels;