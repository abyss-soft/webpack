export function sumMy(x, y) {
  const one = x
  return function(y) {
    return one + y
  }
}

// console.log(sumMy(3)(7))
