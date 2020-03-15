/* eslint-disable no-var */
import { sumMy } from '../src/app/js/module/sum'

test('Sum(1)(2)', () => {
  const result = sumMy(1)(2)

  console.log(result)
  expect(result).toBe(3)
})
