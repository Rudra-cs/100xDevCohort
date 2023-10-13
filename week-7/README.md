<h1 style="color:yellow"><center>Some basic Recoil & TypeScript  Basics🧾</center></h1>

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [**Atoms in Recoil**](#atoms-in-recoil)
- [**Selectors in Recoil**](#selectors-in-recoil)
- [**TypeScript**](#typescript)
  - [Why Typescript](#why-typescript)
  - [What is static typing](#what-is-static-typing)
  - [How to add types](#how-to-add-types)
  - [TS vs JS](#ts-vs-js)
  - [What is the TS compiler?](#what-is-the-ts-compiler)
  - [tsconfig file ( to create it run tsc --init)](#tsconfig-file-to-create-it-run-tsc-init)
  - [**Interfaces, types and enums in TS**](#interfaces-types-and-enums-in-ts)
    - [Interfaces](#interfaces)
    - [Types](#types)
    - [Difference b/w types and interfaces](#difference-bw-types-and-interfaces)
    - [Enums](#enums)

**[⬆ Back to Top](#table-of-contents)**

### **Atoms in Recoil**

> An atom represents a piece of state. Atoms can be read from and written to from any component. Components that read the value of an atom are implicitly subscribed to that atom, so any atom updates will result in a re-render of all components subscribed to that atom:

```js
const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
```

Components that need to read from and write to an atom should use useRecoilState() as shown below:

```js
function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
```

**[⬆ Back to Top](#table-of-contents)**

### **Selectors in Recoil**

> A selector represents a piece of derived state. Derived state is a transformation of state. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way:

```js
const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
```

We can use the useRecoilValue() hook to read the value of charCountState:

```js
function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
```

**[⬆ Back to Top](#table-of-contents)**

### **TypeScript**

> TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

#### Why Typescript

- it is a superset of js
- it gives you static typing
- makes your code more strict

#### What is static typing

> Static typing is a programming language feature that enforces and checks variable types at compile-time, before the code is executed.

#### How to add types

1. Use the : syntax to declare the type of a variable, parameter, or return value.
2. Use built-in types like string, number, boolean, etc., or create custom types with interface or type.
3. Use the any type for variables when type information is unknown.
4. Utilize type inference to let TypeScript automatically infer types when possible.
5. Leverage type annotations to explicitly specify types when needed.
6. Use type checking to catch type-related errors during development.
7. Compile TypeScript code into JavaScript using the TypeScript compiler (tsc) to produce type-checked JavaScript code.

```js
// Declaring variable types
let name: string = "John";
let age: number = 30;

// Creating custom types
interface Person {
  name: string;
  age: number;
}

// Type inference
const person: Person = {
  name: "Alice",
  age: 25,
};

// Type checking
function greet(person: Person): string {
  return `Hello, ${person.name}!`;
}
```

**[⬆ Back to Top](#table-of-contents)**

#### TS vs JS

> How does TS run code?
> Ans:-It never does only JS runs code.

It only does

- Type checking
- convert to JS

#### What is the TS compiler?

- the Compiler is called - tsc
- the code to convert js to ts file is npm i -g tsc

#### tsconfig file ( to create it run tsc --init)

- target
- module type -> target system
- Constraints - > "forceConsistentCasingInFileNames" : true
  does casing matter when importing modules
- "strict" -> How Strictly should TS be evaluated

  **[⬆ Back to Top](#table-of-contents)**

### **Interfaces, types and enums in TS**

#### Interfaces

- Let you accumulate data of a specific type
- Interfaces can use other interfaces
- Interfaces can extend interfaces
- Interfaces can be implemented by classes
- Extra - optional argument(?)

```js
interface Person {
  name: string;
  age: number;
}

export function greet(person: Person): string {
  return (
    "Hello mr." +
    person.name +
    " glad that you are " +
    person.age +
    " years old."
  );
}

console.log(
  greet({
    name: "rudra",
    age: 24,
  })
);
```

```js
//Interfaces can be implemented by classes

interface PersonInterface {
  name: string;
  age: number;
  greet(): string;
}

class Person implements PersonInterface {
  name: string();
  age: string();

  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
  greet(){
    return "hi mr " + this.name;
  }
}
const personObject = new Person("rudra",24)
console.log(personObject.greet())
```

```js
//Interfaces can use other interfaces
interface PersonGenderProperties {
  gender: string;
  orientation: string;
  pronouns: string;
}

interface PersonInterface {
  name: string;
  age: number;
  genderProps: PersonGenderProperties;
}
function greet(person: PersonInterface) {}
console.log(
  greet({
    name: "rudra",
    age: 24,
    genderProps: {
      gender: "male",
      orientation: "straight",
      pronouns: "he/him",
    },
  })
);
```

```js
//Interfaces can extend interfaces
interface PersonGenderProperties {
  gender: string;
  orientation: string;
  pronouns: string;
}

interface PersonInterface extends PersonGenderProperties {
  name: string;
  age: number;
}
interface AnimalInterface extends PersonGenderProperties {
  name: string;
  furType: string;
}
```

#### Types

- Very slightly different from interfaces
- Need to be equated
- Very useful for unions and ors
- Can not be extended other types
- examples of type with different interfaces

```js
interface PersonGenderProps {
  gender: string;
  orientation: string;
  pronouns: string;
}

type PersonInterface = {
  name: string,
  age: number,
  gender: PersonGenderProps,
};

export function greet(person: Person): string {
  return (
    "Hello mr." +
    person.name +
    " glad that you are " +
    person.age +
    " years old."
  );
}

console.log(
  greet({
    name: "rudra",
    age: 24,
  })
);
```

```js
interface Cicle {
  radius: number;
  borderWidth?:number; // optional properties
}
interface Square {
  side: number;
}

interface Rectangle {
  width: number;
  height: number;
}

type Shape = Rectangle | Circle | Square; (OR)
type Shape2 = Rectangle & Circle & Square;(AND having all the properties)

function renderShape(shape: Shape) {
  console.log("Rendered");
}

function calculateArea(shape: Shape) {
  console.log("Calculated Area");
}

renderShape({
  radius: 10,
})
```

#### Difference b/w types and interfaces

- Interfaces can be implemented by classes
- Interfaces can extend each other
- Types can do unions and intersections

#### Enums

```js
enum Arithmetic{
  Add, // 0
  Sub, // 1
  Div, // 2
  Mul // 3
}

function calculate(a:number,b:number,type:Arithmetic){
  console.log(type); // Output ->2
  return 1;
}

const ans = calculate(1,2,Arithmetic.Div)
```

```js
  // Define an enum for days of the week
enum DayOfWeek {
  Sunday,    // 0
  Monday,    // 1
  Tuesday,   // 2
  Wednesday, // 3
  Thursday,  // 4
  Friday,    // 5
  Saturday,  // 6
}

// Using the enum
let today: DayOfWeek = DayOfWeek.Wednesday;

// You can also access enum values by their numeric value
let dayNumber: number = DayOfWeek.Friday;

// Converting an enum value to a string
let todayString: string = DayOfWeek[today];

console.log(`Today is ${todayString}.`); // "Today is Wednesday."

```

**[⬆ Back to Top](#table-of-contents)**
