function countBy(x, n) {
  var count = [];
  for (var i = 1; i <= n; i++) {
  	count.push(x * i);
  }
  return count;
}
