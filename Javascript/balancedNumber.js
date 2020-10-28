function balancedNum(number) {
  let str = '' + number, num = str.length, h = num >> 1;
  let sum = str => str.split('').reduce((a, b) => a + +b, 0);

  return `${sum(str.slice(0, h - ((num & 1) == 0 ? 1 : 0))) != sum(str.slice(h + 1)) ? 'Not ' : ''}Balanced`;
}
