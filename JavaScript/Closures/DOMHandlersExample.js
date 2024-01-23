/**
 * Closure apllied to Higher Order Function in the context of DOM manipulation.
 * The inner function of clickHandler stores the value of 'size' even after function call
 */

function clickHandler(size) {
    return function() {
        document.body.style.fontSize = `${size}px`
    }
}

document.getElementById('size-12').onClick = clickHandler(12)
document.getElementById('size-14').onClick = clickHandler(14)
document.getElementById('size-16').onClick = clickHandler(16)