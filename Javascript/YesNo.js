function yesNo(arr) {
  arr = arr.slice();
  let res = [];
  while (arr.length > 1) {
    //to move elements at the same time
    console.log(arr.slice().shift());
    res.push(arr.shift());
    arr.push(arr.shift());
  }
  if (arr.length) res.push(arr.shift());

  console.log(res);
}

yesNo(["ONE", "TWO", "THREE", "FOUR"]);
