


function areVowels(letter) {
  var vowels = "aeiouAEIOU"
  if (vowels.indexOf(letter) > -1) {
    return true;
  } else {
    return false;
  }
}

function disemvowel(str) {
  var newStr = "";
  for (var i=0; i<str.length; i++) {
    if (areVowels(str[i])) {
      newStr = newStr;
    } else {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}
