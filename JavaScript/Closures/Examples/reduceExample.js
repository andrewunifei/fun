/**
 * An implementaion of Array.prototype.reduce() to practise the concept of Closure
 */

class _Array {
    constructor(elements) {
        this.elements = elements
    }

    _reduce(callback, initialValue = this.elements[0]) {
        let accumulator = initialValue

        // With Closure I can call outfunction defined variables
        this.elements.slice(1).forEach(element => accumulator = callback(accumulator, element));
    
        return accumulator
    }
}

const callback = ((accumulator, current) => accumulator * current)

// Original
const array = [2, 3, 4, 9, 5]
const originalResult = array.reduce(callback)
console.log(originalResult) // 1080

// My implementation
const _array = new _Array(array)
const implementationResult = _array._reduce(callback)
console.log(implementationResult) // 1080
