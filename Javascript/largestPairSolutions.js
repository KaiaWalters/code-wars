maxProduct = a => {
  let x = 0, y = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > x) {
      y = x;
      x = a[i];
    }
    else if (a[i] > y) {
      y = a[i];
    }
  }
  return x * y;
}
