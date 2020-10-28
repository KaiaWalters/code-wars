function maxMultiple(divisor, bound){
  let n = divisor;
  while(n+divisor <= bound) n+= divisor;
  return (divisor > bound) ? 0: n;
}
