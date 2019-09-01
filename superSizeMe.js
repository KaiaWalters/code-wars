function superSize(num){
  if (num < 10) {
    return num;
  } else {
    var r = String(num).split("").sort().reverse().join("");
    return Number(r);
  }
}
