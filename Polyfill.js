POLYFILL NOTES AND EXAMPLES

What is a polyfill?
A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively.

Coined by Remy Sharp - https://remysharp.com/2010/10/08/what-is-a-polyfill

We, as developers, should be able to develop with the HTML5 APIs, and scripts can create the methods and objects that should exist. Developing in this future-proof way means as users upgrade, your code doesnt have to change but users will move to the better, native experience cleanly. From the HTML5 Boilerplate team on polyfills -

https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

Further research:
https://en.wikipedia.org/wiki/Polyfill

An example polyfill
The code below is a polyfill for the new ES6 String method, startsWith():

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

EXAMPLE:

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

MORE COMPLETE LIST OF POLYFILLS REFERENCE LINK:
https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

USING BABEL

The most popular JavaScript transpiler is called Babel.

Babel's original name was slightly more descriptive - 6to5. This was because, originally, Babel converted ES6 code to ES5 code. Now, Babel does a lot more. It'll convert ES6 to ES5, JSX to JavaScript, and Flow to JavaScript.

Before we look at transpiling code on our computer, let's do a quick test by transpiling some ES6 code into ES5 code directly on the Babel website. Check out Babel's REPL and paste the following code into the section on the left:

EXAMPLE:
class Student {
  constructor (name, major) {
    this.name = name;
    this.major = major;
  }

  displayInfo() {
    console.log(`${this.name} is a ${this.major} student.`);
  }
}

const richard = new Student('Richard', 'Music');
const james = new Student('James', 'Electrical Engineering');
