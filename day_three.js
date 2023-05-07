/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
 var createCounter = function(init) {
    
    let initCounter = init

    function increment() {
        return ++initCounter
    }

    function decrement() {
        return --initCounter
    }

    function reset() {
        initCounter = init
        return initCounter
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */