//exports is shorthand for 'module.exports' - can use shorthand when defining a method
//cannot use shorthand when assigning a fuction as a value for the entire export, instead of as a method
module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        setTimeout(() =>
            callback(null, {
                //no longer need (x, y) as parameters b/c the callback function will have access to x and y in its scope
                perimeter: () => 2 * (x + y),
                area: () => x * y,
            }),
            5000
        );
    }
}



// perimeter = (x, y) => 2 * (x + y);
// area = (x, y) => x * y;