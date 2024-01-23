import { reduced, mapped, filled, filtered, sorted } from '../functions/index.js'

test('Reduce array \[1, 2, 5, 8, 7\] by multiplication. Expects 560', () => {
    expect(reduced([1, 2, 5, 8, 7])).toEqual(560)
})

test('Map array \[10, 9, 8, 3, 2, 6\] by power of 2. Expects a new array \[100, 81, 64, 9, 5, 36\]', () => {
    expect(mapped([10, 9, 8, 3, 2, 6])).toStrictEqual([100, 81, 64, 9, 4, 36])
})

test('Fill array of length 5 with zeros. Expects the same array to be \[0, 0, 0, 0, 0\]', () => {
    expect(filled(Array(5))).toStrictEqual([0, 0, 0, 0, 0])
})

test('Filter out the odd numbers of array \[1, 2, 3, 4, 5, 6\]. Expects a new array \[2, 4, 6\]', () => {
    expect(filtered([1, 2, 3, 4, 5, 6])).toStrictEqual([2, 4, 6])
})

test('Sort array of objects \[\{x\: 1, y\: 2\}, \{x: 2, y: 3\}\] in descending order based on y property. Expects the same array to be \[\{x\:2, y\:3\}, \{x: 1, y: 2\}\]', () => {
    expect(sorted([{x: 1, y: 2}, {x: 2, y: 3}])).toStrictEqual([{x: 2, y: 3},{x: 1, y: 2}])
}) 
