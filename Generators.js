GENERATORS NOTES

Whenever a function is invoked, the JavaScript engine starts at the top of the function and runs every line of code until it gets to the bottom. There's no way to stop the execution of the function in the middle and pick up again at some later point. This "run-to-completion" is the way it's always been:

VERY IMPORTANT:

Generators are a powerful new kind of function that is able to pause its execution while also maintaining its own state. Generators are great for iterating over a list of items one at a time so you can handle each item on its own before moving on to the next one. You can also use generators to handle nested callbacks. For example, let's say that an app needs to get a list of all repositories and the number of times they've been starred. Well, before you can get the number of stars for each repository, you'd need to get the user's information. Then after retrieving the user's profile the code can then take that information to find all of the repositories.

Generators will also be used heavily in upcoming additions to the JavaScript language. One upcoming feature that will make use of them is async functions.

function getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}

getEmployee();
Running the code above produces the following output on the console:

the function has started
Amanda
Diego
Farrin
James
Kagure
Kavita
Orit
Richard
the function has ended
But what if you want to print out the first 3 employee names then stop for a bit, then, at some later point, you want to continue where you left off and print out more employee names. With a regular function, you can't do this since there's no way to "pause" a function in the middle of its execution.

Pausable Functions
If we do want to be able to pause a function mid-execution, then we'll need a new type of function available to us in ES6 - generator functions! Let's look at one:

function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
    }

    console.log('the function has ended');
}
Notice the asterisk (i.e. *) right after the function keyword? That asterisk indicates that this function is actually a generator!

Now check out what happens when we try running this function:

getEmployee();

// this is the response I get in Chrome:
getEmployee {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}
--------------------------------------------------------------------------------------------------------------------------------------------

GENERATORS & ITERATORS

IMPORTANT:
When a generator is invoked, it doesn't actually run any of the code inside the function. Instead, it creates and returns an iterator. This iterator can then be used to execute the actual generator's inner code.

EXAMPLE:

function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
    }

    console.log('the function has ended');
}

const generatorIterator = getEmployee();
generatorIterator.next();

OUTPUT:
the function has started
Amanda
Diego
Farrin
James
Kagure
Kavita
Orit
Richard
the function has ended





Now if you tried the code out for yourself, the first time the iterator's .next() method was called it ran all of the code inside the generator. Did you notice anything? The code never paused! So how do we get this magical, pausing functionality?

The Yield Keyword
The yield keyword is new and was introduced with ES6. It can only be used inside generator functions. yield is what causes the generator to pause. Let's add yield to our generator and give it a try:

function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;
    }

    console.log('the function has ended');
}
Notice that there's now a yield inside the for...of loop. If we invoke the generator (which produces an iterator) and then call .next(), we'll get the following output:

const generatorIterator = getEmployee();
generatorIterator.next();
Logs the following to the console:

the function has started
Amanda
It's paused! But to really be sure, let's check out the next iteration:

generatorIterator.next();
Logs the following to the console:

Diego
So it remembered exactly where we left off! It took the next item in the array (Diego), logged it, and then hit the yield again, so it paused again.

Now pausing is all well and good, but what if we could send data from the generator back to the "outside" world? We can do this with yield.

Yielding Data to the "Outside" World
Instead of logging the names to the console and then pausing, let's have the code "return" the name and then pause.

function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}
Notice that now instead of console.log(name); that it's been switched to yield name;. With this change, when the generator is run, it will "yield" the name back out to the function and then pause its execution. Let's see this in action:

const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value // is "Amanda"

generatorIterator.next().value // is "Diego"
generatorIterator.next().value // is "Farrin"


SENDING DATA INTO/OUT OF A GENERATOR

So we can get data out of a generator by using the yield keyword. We can also send data back into the generator, too. We do this using the .next() method:

function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator
// the line above logs to the console: Your response is "Hello Udacity Student"!
Calling .next() with data (i.e. .next('Richard')) will send data into the generator function where it last left off. It will "replace" the yield keyword with the data that you provided.

So the yield keyword is used to pause a generator and used to send data outside of the generator, and then the .next() method is used to pass data into the generator. Here's an example that makes use of both of these to cycle through a list of names one at a time:

function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name);
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value;

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value;
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value;

// displays each name with description on its own line
positions.join('\n');
