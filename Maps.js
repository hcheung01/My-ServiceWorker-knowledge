MAPS AND WEAKMAPS _onSocketMessage


MAPS

-iterables
-dont prevent objects from being garbage collected
-unqiue because they are a collection of key value pairs, where as Sets are
collection of unique values

You could say.....

TIP:
Sets are to arrays

AND

Maps are to objects

Maps
If Sets are similar to Arrays, then Maps are similar to Objects because Maps store key-value pairs similar to how objects contain named properties with values.

Essentially, a Map is an object that lets you store key-value pairs where both the keys and the values can be objects, primitive values, or a combination of the two.

CREATING A MAP

EXAMPLE:
const employees = new Map();
console.log(employees);

OUPUT:
MAP {}

Modifying Maps
Unlike Sets, you can’t create Maps from a list of values; instead, you add key-values by using the Map’s .set() method.

EXAMPLE 2:
const employees = new Map();

employees.set('james.parkes@udacity.com', {
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer'
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);

OUTPUT:
Map {'james.parkes@udacity.com' => Object {...}, 'julia@udacity.com' => Object {...}, 'richard@udacity.com' => Object {...}}

The .set() method takes two arguments. The first argument is the key, which is used to reference the second argument, the value.

To remove key-value pairs, simply use the .delete() method.

EXAMPLE:
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');
console.log(employees);
Map {'james.parkes@udacity.com' => Object {firstName: 'James', lastName: 'Parkes', role: 'Course Developer'}}

Again, similar to Sets, you can use the .clear() method to remove all key-value pairs from the Map.

EXAMPLE 2:
employees.clear()
console.log(employees);
Map {}

TIP: If you .set() a key-value pair to a Map that already uses the same key, you won’t receive an error, but the key-value pair will overwrite what currently exists in the Map. Also, if you try to .delete() a key-value that is not in a Map, you won’t receive an error, and the Map will remain unchanged.

The .delete() method returns true if a key-value pair is successfully deleted from the Map object, and false if unsuccessful. The return value of .set() is the Map object itself if successful.


WORKING WITH MAPS

After you’ve built your Map, you can use the .has() method to check if a key-value pair exists in your Map by passing it a key.

EXAMPLE:
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));

OUTPUT:
false
true

And you can also retrieve values from a Map, by passing a key to the .get() method.

console.log(members.get('Evelyn'));
75.68

LOOPING THROUGH MAPS

There are three options to loop through MAPS
1. Step through each key or value using the Map’s default iterator
2. Loop through each key-value pair using the new for...of loop
3. Loop through each key-value pair using the Map’s .forEach() method



1. Using the MapIterator
Using both the .keys() and .values() methods on a Map will return a new iterator object called MapIterator. You can store that iterator object in a new variable and use .next() to loop through each key or value. Depending on which method you use, will determine if your iterator has access to the Map’s keys or the Map’s values.

.keys()  METHOD for Map keys

EXAMPLE:
let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();

OUTPUT:
Object {value: 'Evelyn', done: false}

Use .next() to the get the next key value.
EXAMPLE:
iteratorObjForKeys.next();

OUTPUT:
Object {value: 'Liam', done: false}

And so on.

EXAMPLE:
iteratorObjForKeys.next();

OUTPUT:
Object {value: 'Sophia', done: false}


.values() METHOD for Map values

EXAMPLE:
let iteratorObjForValues = members.values();
iteratorObjForValues.next();

OUTPUT:
Object {value: 75.68, done: false}

2. Using a for...of Loop
Second option for looping through a Map is with a for...of loop.

EXAMPLE:
for (const member of members) {
  console.log(member);
}

OUTPUT:
 ['Evelyn', 75.68]
 ['Liam', 20.16]
 ['Sophia', 0]
 ['Marcus', 10.25]

However, when you use a for...of loop with a Map, you don’t exactly get back a key or a value. Instead, the key-value pair is split up into an array where the first element is the key and the second element is the value. If only there were a way to fix this?


WHAT IS A WeakMap?
A WeakMap is just like a normal Map with a few key differences:

a WeakMap can only contain objects as keys,
a WeakMap is not iterable which means it can’t be looped and
a WeakMap does not have a .clear() method.
You can create a WeakMap just like you would a normal Map, except that you use the WeakMap constructor.

EXAMPLE:
const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);

OUTPUT:
WeakMap {Object {title: 'Pride and Prejudice', author: 'Jane Austen'} => true, Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}

…but if you try to add something other than an object as a key, you’ll get an error!

OUTPUT:
Uncaught TypeError: Invalid value used as weak map key(…)

This is expected behavior because WeakMap can only contain objects as keys. Again, similar to WeakSets, WeakMaps leverage garbage collection for easier use and maintainability.

GARBAGE COLLECTION
In JavaScript, memory is allocated when new values are created and is "automatically" freed up when those values are no longer needed. This process of freeing up memory after it is no longer needed is what is known as garbage collection.

WeakMaps take advantage of this by exclusively working with objects as keys. If you set an object to null, then you’re essentially deleting the object. And when JavaScript’s garbage collector runs, the memory that object previously occupied will be freed up to be used later in your program.

EXAMPLE:
book1 = null;
console.log(library);

OUTPUT:
WeakMap {Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}

What makes this so useful is you don’t have to worry about deleting keys that are referencing deleted objects in your WeakMaps, JavaScript does it for you! When an object is deleted, the object key will also be deleted from the WeakMap when garbage collection runs. This makes WeakMaps useful in situations where you want an efficient, lightweight solution for creating groupings of objects with metadata.

The point in time when garbage collection happens is dependent on a lot of different factors. Check out MDN’s documentation to learn more about the algorithms used to handle garbage collection in JavaScript.
