<h1 style="color:yellow"><center> Javascript Basics🧾</center></h1>

> <h3 style="color:red">Why JavaScript?</h3>JavaScript is an object oriented programming language invented to execute web development simpler and more beautiful.

#### Javascript is

- Single Threaded
- Asynchronous
- Loosely Typed
- Interpreted

### JavaScript: Primitive Values & Object References

#### JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript:

- Primitive values
- Non-primitive values (object references)

Data types that are known as primitive values in JavaScript are numbers, strings, booleans, null, undefined. Objects such as functions and arrays are referred to as non-primitive values.

The fundamental difference between primitives and non-primitives is that primitives are immutable and non-primitives are mutable.

Primitives are known as being immutable data types because there is no way to change a primitive value once it gets created.

```js
var string = "This is a string.";
string[1] = "H";
console.log(string); // 'This is a string.'
```

Primitives are compared by value. Two values are strictly equal if they have the same value.

```js
var number1 = 5;
var number2 = 5;
number1 === number 2; // true
var string1 = 'This is a string.';
var string2 = 'This is a string.';
string1 === string2; // true
```

Non-primitive values are mutable data types. The value of an object can be changed after it gets created.

```js
var arr = ["one", "two", "three", "four", "five"];
arr[1] = "TWO";
console.log(arr); // [ 'one', 'TWO', 'three', 'four', 'five' ];
```

Objects are not compared by value. This means that even if two objects have the same properties and values, they are not strictly equal. Same goes for arrays. Even if they have the same elements that are in the same order, they are not strictly equal.

```js
var obj1 = { cat: "playful" };
var obj2 = { cat: "playful" };
obj1 === obj2; // false
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
arr1 === arr2; // false
```

Non-primitive values can also be referred to as reference types because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

```js
var obj3 = { car: "purple" };
var obj4 = obj3;
obj3 === obj4; // true
```

### Primitive data types

In JavaScript, there are six primitive data types. These are simple, immutable data types that represent single values. Here are the primitive data types along with examples:

1. **Number**: Represents numeric values, including integers and floating-point numbers.

```js
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number
```

2. **String**: Represents textual data, enclosed in single ('') or double ("") quotes.

```js
let str1 = "Hello"; // Using single quotes
let str2 = "World"; // Using double quotes
```

3. **Boolean**: Represents a binary value, either true or false.

```js
let isTrue = true;
let isFalse = false;
```

4. Undefined: Represents a variable that has been declared but hasn't been assigned a value yet.

```js
let undefinedVar;
console.log(undefinedVar); // Output: undefined
```

5. Null: Represents the intentional absence of any object value.

```js
let emptyValue = null;
```

6. Symbol (added in ECMAScript 6): Represents a unique and immutable value, often used as property keys in objects.

```js
const uniqueSymbol = Symbol("description");
```

### Objects in JS

In JavaScript, objects are one of the fundamental data structures and are used to represent collections of key-value pairs. Objects can store various types of data, including other objects, functions, and primitive values.

1. **Object Literal Syntax:**

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

console.log(person.firstName); // Output: "John"
console.log(person.age); // Output: 30
```

2. **Constructor Function:**

```js
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const person = new Person("John", "Doe", 30);

console.log(person.firstName); // Output: "John"
console.log(person.age); // Output: 30
```

3. **ES6 Class:**

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("John", "Doe", 30);

console.log(person.getFullName()); // Output: "John Doe"
```

4. **Nested Objects:**

```js
const address = {
  street: "123 Main St",
  city: "Anytown",
};

const person = {
  firstName: "John",
  lastName: "Doe",
  address: address,
};

console.log(person.address.city); // Output: "Anytown"
```

5. **Adding and Modifying Properties:**

```js
const car = {
  make: "Toyota",
  model: "Camry",
};

car.year = 2021; // Adding a new property
car.model = "Corolla"; // Modifying an existing property

console.log(car.year); // Output: 2021
console.log(car.model); // Output: "Corolla"
```

6. **Object Methods:**

```js
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
```

### JS Functions

#### Defining Functions

1. **Function Declaration:**

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

2. **Function Expression:**

```js
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};
```

3. **Arrow Function (ES6):**

```js
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
```

- **Anonymous Functions**

```js
const square = function (x) {
  return x * x;
};
console.log(square(3)); // Output: 9
```

- **Callback Functions**

  Takes another function as argument

```js
function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

doSomething(function () {
  console.log("Callback function executed.");
});
```

### ReadFile from text file:

- In JavaScript, you can use the fs (File System) module to read files from your computer's file system. To read a file using fs, you'll typically use the readFile function. Here's how you can use it:

First, you need to include the fs module by requiring it if you're working in a Node.js environment:

```js
const fs = require("fs");
```

Then, you can use the fs.readFile function to read the contents of a file asynchronously:

```js
const filePath = "path/to/your/file.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  console.log("File contents:", data);
});
```

In this example:

- **filePath** is the path to the file you want to read. Make sure to provide the correct path to the file you want to read.

- **'utf8'** specifies the encoding of the file. You can change it to 'binary' or other encodings if needed.

- The **readFile** function is asynchronous, so it takes a callback function as its third argument. This callback function will be executed once the file has been read or if an error occurs.

- Inside the callback function, you check for any errors (err). If an error occurs while reading the file, it will be logged. Otherwise, the data variable will contain the contents of the file, which you can process as needed.

Here's how you can read a file synchronously using fs.readFileSync:

```js
const filePath = "path/to/your/file.txt";

try {
  const data = fs.readFileSync(filePath, "utf8");
  console.log("File contents:", data);
} catch (err) {
  console.error("Error reading the file:", err);
}
```

> In this synchronous approach, the code will block until the file is read, and any errors will be caught using a try-catch block.
