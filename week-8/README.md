<h1 style="color:yellow"><center>Custom Hooks, Generics and zod || Monorepos and Publishing packages to npm registry 🧾</center></h1>

## Table Of Contents

- [Array notation](#array-notation)
- [Generics](#generics)
- [Partials in TS](#partials-in-ts)
- [Why we need backend validation?](#why-we-need-backend-validation)
  - [Zod validation](#zod-validation)
- [Zod inference](#zod-inference)

**[⬆ Back to Top](#table-of-contents)**

### Array notation

- TS can infer return types

```js
type NumberArr = number[];

function getFirstItem(arr: NumberArr): number {
  return arr[0];
}

let a = getFirstItem([1, 2, 3]);
console.log(a);
```

So for second one the array can have numbers as input or string as input then write the function

```ts
type Arr = (number | string)[];

function getFirstItem(arr: Arr): number | string {
  return arr[0];
}

let a = getFirstItem([1, 2, 3]);
let b = getFirstItem(["one", "two", "three"]);

// Now if i do
b.toLowerCase();

// Ts compiler will show a error that the lowercase func does support it as it can either be a string or number even if we know that it is a string so we introduce generics.
```

### Generics

> Generics refer to a programming concept that allows the creation of classes, interfaces or methods that can work with different types while maintaining the type safety. In other words generics provide a way to write reusable code that can operate on various data types without sacrifiing type checking at compile time.

```ts
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

let a = getFirstItem<number>([1, 2, 3]);
let b = getFirstItem<string>(["one", "two", "three"]);
b.toLowerCase();
```

- Asssignment 2

  - Create a swap function that can take 2 arguments of the same type
  - Args can be either 2 strings or boolean (both of the same type )
  - The function should swap them and return array with first element as the second one and vice versa

  ```ts
  function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
  }

  const ans = swap(1, 2);
  const ans = swap("1", "2");
  ```

  - What if the types of args are different

  ```ts
  function swap<T, U>(a: T, b: U): [U, T] {
    return [b, a];
  }

  const ans = swap(1, "2");
  const ans = swap("1", true);
  const [s, t] = swap(1, "2"); // Array destructing
  ```

### Partials in TS

- Make all attributes optional

```ts
// Define a interface representing a person with required properties
type Person = {
  name: string;
  age: number;
};

// Use Partial to create a type where all properties are optional
type PartialPerson = Partial<Person>;

// Create a person object with optional properties
const optionalPerson: PartialPerson = {
  name: "Alice",
  // age is optional here
};

// You can still add all required properties if needed
const completePerson: PartialPerson = {
  name: "Bob",
  age: 30,
};
```

### Why we need backend validation?

- Erroneous inputs can cause error
- Try to break the todo app in week 8 repo by sending vague email long email sending an objet in username

#### Zod validation

- When your server is running and a user sends incorrect inputs or the server crashes for some reason, you want it to keep running and handle such issues gracefully. To achieve this, you can use a process manager like "pm2" (preferred) or "forever."

Here's how it works:

    Server Monitoring: PM2 and Forever continuously monitor your server to ensure it's running correctly.

    Automatic Restart: If your server crashes or encounters issues due to incorrect inputs or other reasons, the process manager detects this and takes action to automatically restart the server. This ensures your application remains available and responsive.

    Error Handling: Process managers can also log errors and exceptions, making it easier for you to identify and fix issues in your server code.

    In essence, process managers like PM2 or Forever help keep your server up and running, even in the face of errors or crashes, ensuring a more reliable and robust server environment.

- pm2

  ```shell
  <!-- for installing pm2 -->
  npm i -g pm2

  <!-- for running a script -->
  pm2 start <app.js/index.js>

  <!-- for killing all the daemon services -->
  pm2 kill

  <!-- for listing all the process -->
  pm2 list
  ```

- Zod Validation

```ts
import { z } from "zod";

// Define a schema for authentication data
const authSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

// Validate authentication data
const authData = {
  username: "john",
  password: "pass123",
};

try {
  const validatedData = authSchema.safeParse(authData);
  console.log("Authentication data is valid:", validatedData);
} catch (error) {
  console.error("Authentication data is invalid:", error.errors);
}
```

```ts
import { z } from "zod";

// creating a schema for strings
const mySchema = z.string();

// parsing
mySchema.parse("tuna"); // => "tuna"
mySchema.parse(12); // => throws ZodError

// "safe" parsing (doesn't throw error if validation fails)
mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
mySchema.safeParse(12); // => { success: false; error: ZodError }
```

- Custom fetch hook

```js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

- Create yourr own packages

  - And how to re-use packages
  - What are monorepos
    > A monorepo, short for "monolithic repository," is a version control repository that contains multiple projects, applications, or services. Instead of having separate repositories for each project, all related code is stored in a single repository. This approach is often used in large-scale software development to manage multiple interdependent projects more efficiently.

- Why packages/modules?

  - Re-usable code
  - Separation of concern
  - Teams can work on modules independently

### Zod inference

> In Zod, type inference is a feature that allows you to automatically derive TypeScript types from your Zod schema definitions. This means that you can use Zod to define the shape and validation rules for your data, and Zod will generate TypeScript types based on those definitions. This helps you ensure type safety and consistency in your code.

```ts
import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  age: z.number().min(18),
});

// Zod automatically infers TypeScript types for the user object
type User = z.infer<typeof userSchema>;

const user: User = {
  id: "123",
  username: "john_doe",
  email: "john@example.com",
  age: 25,
};

// If you try to assign incorrect values, TypeScript will produce an error
const invalidUser: User = {
  id: "456",
  username: "jane_doe",
  email: "invalid-email", // Error: Type '"invalid-email"' is not assignable to type 'string'
  age: 16, // Error: Value is less than the minimum (18)
};
```

- BY using this inference we can have the same type check in the frontend of the application

- Lets make a new folder named common

  - first do npm init
  - then do tsc --init
  - then in tsconfig.json add "rootDir" : "src" this will make the tsc to take only the files from the src folder and "outDir":"dist"

  - create a npm js website and now we will now publish our common repo in npm registry

    - now in terminal run `npm login` then login to it using username and password
    - and in package.json in common change the name to "@username/common" and change the main to "dist/index.js" and forget to create .npmignore file and add src to it
    - now we dont want to publish our ts file to npm so we do `npm publish --access=public`
    - now if we do `npm pack` we can see what did we publish to npm registry
    - And if we change anything then we again publish the changes but we have to change the version from the package.json

  - Now try installing the package using npm install package name i.e. @username/common
    - now importing it to files
      ```ts
      import { signupInput } from "@100xdev/common";
      ```
      but now ts shows a error its beacause we only have js file in the registry so now we again go to common tsconfig.json and add
      "declaration": true. Now if we do tsc now it add a index.d.ts file in the dist folder
      and lastly publish it with updated version.

\*\* So this is a way to do create your own package but we can all do this using mono repos as it will handle all the tedious task.

- Mono repos

  - npm workspaces
  - Lerna
  - Turborepo (popular)

  - Install turborepo and run npm run dev
  - in the package.json you can see "ui":"\*" to import from the ui

**[⬆ Back to Top](#table-of-contents)**
