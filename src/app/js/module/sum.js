export function sumMy(x, y) {
  const one = x
  return function(y) {
    return one + y
  }
}
