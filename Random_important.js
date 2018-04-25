How Can You Know What Features Browsers Support?
With new language specifications coming out every year and with browsers updating every other month, it can be quite challenging to know what browser supports which language features. Each browser maker (except for Safari) has a website that tracks its development status. Checkout the platform feature updates for each browser:

Google Chrome - https://www.chromestatus.com/features#ES6
Microsoft Edge - https://developer.microsoft.com/en-us/microsoft-edge/platform/status/?q=ES6
Mozilla Firefox - https://platform-status.mozilla.org/
NOTE: Safari doesn't have it's own platform status website. Under the hood, though, Safari is powered by the open source browser engine, Webkit. The status for Webkit features can be found here.

This can be a lot of information to track down. If you prefer a birdseye view of all the feature support for all JavaScript code, check out the ECMAScript Compatibility Table built by @kangax:

http://kangax.github.io/compat-table/es6/

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

Transpiling Project In Repo

The way Babel transforms code from one language to another is through plugins. There are plugins that transform ES6 arrow functions to regular ES5 functions (the ES2015 arrow function plugin). There are plugins that transform ES6 template literals to regular string concatenation (the ES2015 template literals transform). For a full list, check out all of Babel's plugins.

Now, you're busy and you don't want to have to sift through a big long list of plugins to see which ones you need to convert your code from ES6 to ES5. So instead of having to use a bunch of individual plugins, Babel has presets which are groups of plugins bundled together. So instead of worrying about which plugins you need to install, we'll just use the ES2015 preset that is a collection of all the plugins we'll need to convert all of our ES6 code to ES5.

You can see that the project has a .babelrc file. This is where you'd put all of the plugins and/or presets that the project will use. Since we want to convert all ES6 code, we've set it up so that it has the ES2015 preset.

Transpiling Recap
It's important to stay on top of all the changes JavaScript is going through. The best way to do that is to start making use of the new features that are added. The problem is that not all browsers support these new features. So to have your cake and eat it too, you can write in ES6 and then use a transpiler to convert it to ES5 code. This lets you transform your project's code base to the newest version of the language while still letting it run everywhere. Then, once all of the browsers your app has to run on fully support ES6 code, you can stop transpiling your code and just serve the straight ES6 code, directly!
