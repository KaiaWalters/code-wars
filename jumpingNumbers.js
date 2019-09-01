const jumpingNumber = n => {
  const numbers = [...String(n)]
  console.log(numbers)
  const allAdjacentsDiffersByOne = numbers.every((num, index, array) => {
    if (index === array.length - 1) return true
    const actualNumber = Number(num)
    const nextNumber = Number(array[index + 1])
    return actualNumber === nextNumber + 1 || actualNumber === nextNumber - 1
  })
  return allAdjacentsDiffersByOne ? 'Jumping!!' : 'Not!!'
}
