<h1 style="color:yellow"><center> Async Javascript🧾</center></h1>

> <h3 style="color:red">Asynchronous?</h3>Asynchronous programming is an essential concept in JavaScript that allows your code to run in the background without blocking the execution of other code.

```js
// Simulating an asynchronous function with a callback
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Example Data" };
    callback(null, data); // Pass the result as the second argument
  }, 2000); // Simulate a 2-second delay
}

// Callback function to handle the result or errors
function handleData(error, result) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data fetched:", result);
  }
}

console.log("Fetching data...");
fetchData(handleData); // Pass the callback function to fetchData
console.log("Main function continues to execute..."); // This runs immediately
```

> Certainly! setTimeout and setInterval are two commonly used functions in JavaScript for scheduling the execution of code at a specific time or repeatedly with a specified delay.

### setTimeout and clearTimeout

#### setTimeout

- The setTimeout function allows you to execute a given function or code snippet after a specified delay in milliseconds. It schedules a single execution of the provided code.

```js
const timeoutID = setTimeout(() => {
  console.log("Delayed message after 2 seconds.");
}, 2000);
```

#### clearTimeout

- If you want to cancel a scheduled setTimeout, you can use the clearTimeout function by passing the timeoutID returned by setTimeout.

```js
const timeoutID = setTimeout(() => {
  console.log("This message will never be logged.");
}, 2000);

clearTimeout(timeoutID); // Cancel the timeout
```

### setInterval and clearInterval

#### setInterval

- The setInterval function allows you to repeatedly execute a given function or code snippet at a specified interval.

```js
let count = 0;
const intervalID = setInterval(() => {
  console.log(`Interval message ${count}`);
  count++;

  if (count === 5) {
    clearInterval(intervalID); // Stop the interval after 5 executions
  }
}, 1000);
```

#### clearInterval

- To cancel a scheduled setInterval, you can use the clearInterval function by passing the intervalID returned by setInterval.

```js
const intervalID = setInterval(() => {
  console.log("This message will be logged repeatedly.");
}, 1000);

// After some time, if you want to stop the interval:
clearInterval(intervalID);
```

---

### Event Loop

<img src="./images/Event Loop.png" width="700" height="400">

- The event loop is a core concept in JavaScript and is responsible for handling asynchronous operations and event-driven code execution. It allows JavaScript to perform non-blocking operations efficiently. Here's an overview of how the event loop works in JavaScript:

1. **Call Stack:**

   - When you execute JavaScript code, it runs sequentially, line by line, and function calls are added to the call stack.

2. **Asynchronous Operations:**

   - JavaScript provides mechanisms for asynchronous operations, such as setTimeout, fetch, and event listeners. When an asynchronous operation is encountered, it's offloaded to the Web APIs (provided by the browser or environment).

3. **Web APIs:**

   - Web APIs are provided by the browser or the JavaScript runtime environment. These APIs handle asynchronous operations outside of the JavaScript engine. Examples include the DOM API, Fetch API, and setTimeout.
   - Asynchronous operations like fetching data or waiting for user interactions are delegated to these Web APIs, which run concurrently with JavaScript code.

4. **Callback Queue/Macrotask Queue:**

   - Once the Web APIs complete their tasks, they push the corresponding callback functions or events into the callback queue.

5. **Microtask Queue:**

   - In the context of the JavaScript event loop, the microtask queue (also known as the microtask queue or the job queue) is a separate queue that handles certain types of asynchronous tasks with higher priority compared to the regular callback queue.
   - Higher Priority than callback queues
   - **Examples of Microtasks**: Promises and certain APIs like MutationObserver and process.nextTick (in Node.js) schedule tasks in the microtask queue.
   - Microtasks are executed in FIFO

6. **Event Loop:**

   - The event loop continuously checks the callback queue for any pending callbacks or events.
   - If the call stack is empty, the event loop will take the first callback/event from the queue and push it onto the call stack for execution.
   - This process ensures that asynchronous operations do not block the main execution thread, allowing the program to remain responsive.

---

### Promises in Javascript

> A Promise is an object representing the eventual completion or failure of an asynchronous operation.

- It has three possible states:
  - Pending: Initial state, before the operation completes or fails.
  - Fulfilled (Resolved): The operation completed successfully, and the Promise has a result.
  - Rejected: The operation failed, and the Promise has a reason (error).

#### Creating a Promise:

- You can create a Promise using its constructor, which takes a callback function with two arguments: resolve and reject. Inside this callback, you perform the asynchronous operation, and when it's done, you call either resolve to indicate success or reject to indicate an error.

```js
const myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  const isSuccess = true; // Simulating success

  if (isSuccess) {
    resolve("Success!"); // Operation completed successfully
  } else {
    reject("Error!"); // Operation failed with an error
  }
});
```

#### Consuming a Promise:

- You can use .then and .catch methods to handle the result or error of a Promise:

```js
myPromise
  .then((result) => {
    console.log("Promise resolved with result:", result);
  })
  .catch((error) => {
    console.error("Promise rejected with error:", error);
  });
```

#### Chaining Promises:

- Promises are chainable, allowing you to create sequences of asynchronous operations:

```js
const fetchUser = () => {
  return fetch("https://api.example.com/user");
};

const fetchPosts = (userId) => {
  return fetch(`https://api.example.com/posts/${userId}`);
};

fetchUser()
  .then((response) => response.json())
  .then((user) => fetchPosts(user.id))
  .then((posts) => {
    console.log("Fetched user and posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

#### Error Handling:

- Promises provide a central error-handling mechanism using .catch. Errors in any part of the Promise chain will be caught by the nearest .catch handler:

```js
myPromise
  .then((result) => {
    // Do something with the result
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
```

### Async/Await:

- ES6 introduced async/await, which simplifies working with Promises by allowing you to write asynchronous code in a more synchronous-like style:

```js
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```

#### Example of Promise and setTimeout:

```js
// A function that returns a Promise which resolves after a specified delay
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${ms} milliseconds`);
    }, ms);
  });
}

// Using the delay function
console.log("Start");

delay(2000)
  .then((message) => {
    console.log(message); // This will be logged after a 2-second delay
    return delay(1000); // Return another Promise for another 1-second delay
  })
  .then((message) => {
    console.log(message); // This will be logged after a total of 3 seconds
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("End");
```
