import { rect } from './rectangle.mjs';

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message);
        } else {
        //no longer need (l, w) as parameters b/c they're passed in to rect
        //rect now refers to a function and not an object, the object is being passed as 'rectangle'
        console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
        console.log('. . .');
        }   
    });
    console.log('This statement is logged after the call to rect()');
    console.log('. . .');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);