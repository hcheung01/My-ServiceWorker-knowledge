SETS FOR ES6 NOTES

A set is an object and a collection of distinct items. For example, {2, 4, 5, 6} is a set because each number is unique and appears only once. However, {1, 1, 2, 4} is not a set because it contains duplicate entries (the 1 is in there more than once!).

Arrays is opposite because Arrays do not enforce items to be unique. If we try to add another 2 to nums, JavaScript wont complain and will add it without any issue.

EXAMPLE:
const nums = [2, 4, 5, 6];

Pushing another 2 to the arrays:
nums.push(2);

Output:
console.log(nums);

//
[2, 4, 5, 6, 2]


NOTES

In ES6, there’s a new built-in object that behaves like a mathematical set and works similarly to an array. This new object is conveniently called a "Set". The biggest differences between a set and an array are:

Sets are not indexed-based - you do not refer to items in a set based on their position in the set
items in a Set can’t be accessed individually
Basically, a Set is an object that lets you store unique items. You can add items to a Set, remove items from a Set, and loop over a Set. These items can be either primitive values or objects.

HOW TO CREATE A SET

There’s a couple of different ways to create a Set. The first way, is pretty straightforward:

TIP: Use the new keyword to create a new Set();

TIP#2: Set will automatically removes duplicate entries

EXAMPLE:
const games = new Set();
console.log(games);

//output will show the set object
Set {}

This creates an empty Set games with no items.

If you want to create a Set from a list of values, you use an array

EXAMPLE:
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);
Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}

Notice the example above automatically removes the duplicate entry "Super Mario Bros." when the Set is created. Pretty neat!

MODIFYING SETS METHODS

TIP: If attempting to .add() a duplicate item to a Set, you won’t receive an error, but the item will not be added to the Set. Also, if you try to .delete() an item that is not in a Set, you won’t receive an error, and the Set will remain unchanged.

.add() returns the Set if an item is successfully added. On the other hand, .delete() returns a Boolean (true or false) depending on successful deletion.

Adding items to the SET:
Use .add() method

Deleting items from the SET:
Use .delete() method

Deleting all items from the SET:
Use .clear() method
------------------------------------------------------------------------------------------------------------
WORKING WITH SETS

Checking the length:

There are a couple of different properties and methods you can use to work with Sets. Because you cannot accessed the index like an array using the .length property...

MAIN EXAMPLE:
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

1. Checking The Length
Return the number of items from the Set example above using this property...

SYNTAX:
  .size or object.size

EXAMPLE:
console.log(months.size);

OUTPUT:
12

2. Checking If An Item Exists
To check if an item exists in a Set using this method which will return a boolean of true or false...

SYNTAX:
  .has() or object.has(item)

EXAMPLE:
console.log(months)

OUTPUT:
//true

3. Retrieving All values
Return the values in a Set. The return value of the method is a SetIterator object

SYNTAX:
  .values();

EXAMPLE:
console.log(months.values());

OUTPUT:
SetIterator {'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'}

TIP: The .keys() method will behave the exact same way as the .values() method by returning the values of a Set within a new Iterator Object. The .keys() method is an alias for the .values() method for similarity with maps. You’ll see the .keys() method later in this lesson during the Maps section.
------------------------------------------------------------------------------------------------------------
SETS & ITERATORS

Sets are built-in iterables. This means TWO things in terms of looping:

You can use the Set’s default iterator to step through each item in a Set, one by one.
You can use the new for...of loop to loop through each item in a Set.

1. USING THE SetIterator

Because the .values() method returns a new iterator object (called SetIterator), you can store that iterator object in a variable and loop through each item in the Set using .next().

EXAMPLE:
const iterator = months.values();
iterator.next();
Object {value: 'January', done: false}

And if you run .next() again?

iterator.next();
Object {value: 'February', done: false}

And so on until done equals true which marks the end of the Set.

2. FOR..... OF LOOP

An easier method to loop through the items in a Set is the for...of loop.

EXAMPLE:
const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);

for (const color of colors) {
  console.log(color);
}

OUTPUT:
red
orange
yellow
green
blue
violet
brown
black

WEAKSETS
hat is a WeakSet?
A WeakSet is just like a normal Set with a few key differences:

a WeakSet can only contain objects
a WeakSet is not iterable which means it can’t be looped over
a WeakSet does not have a .clear() method
You can create a WeakSet just like you would a normal Set, except that you use the WeakSet constructor.

const student1 = { name: 'James', age: 26, gender: 'male' };
const student2 = { name: 'Julia', age: 27, gender: 'female' };
const student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'Richard', age: 31, gender: 'male'}, Object {name: 'James', age: 26, gender: 'male'}}
