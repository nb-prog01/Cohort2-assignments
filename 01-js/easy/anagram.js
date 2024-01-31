/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let a=str1.toLowerCase().split("");
  let b=str2.toLowerCase().split("");

  a=a.sort();
  b=b.sort();

  //using for loop

  // if(a.length!==b.length)
  //   {return false;}
  //     else{
  //       for(var i=0;i<a.length;i++){
  //         if(a[i]!==b[i]){
  //           return false;
  //         }
  //       }
  //     return true;
  // } 

  // using every

  if(a.length === b.length && a.every((element, index) => element === b[index])){
    return true;
  }else{
    return false;
  }

}

//  let str1='Debit Card';
//  let str2='Bad Credit';
//  isAnagram(str1,str2);

module.exports = isAnagram;
