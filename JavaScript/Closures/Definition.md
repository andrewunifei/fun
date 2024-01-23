# Definition of Closure

According to *MDN Web Docs*: "A Closure is the combination of a function bundled together (enclosed) with references to its surrouding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time."

Whenever we're talking about Closures, we're talking about the situation involving two functions, one called the outer function and another one that's inside it called the inner function.

```JavaScript
function outer() {
    function inner() {

    }
}
```

The power of Closures is that the inner function remembers the outer funtion scope even after creation time.