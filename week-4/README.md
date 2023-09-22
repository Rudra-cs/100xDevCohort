<h1 style="color:yellow"><center>React.js and more into reconcilers 🧾</center></h1>

## Table Of Contents

- []()

virtual dom
state and components

### Virtual DOM

> Virtual Document Object Model is a concept used in web development frameworks like React to improve the performance of updating and rendering user interfaces. It's a virtual representation of the actual DOM in memory, and it allows developers to make changes to the virtual DOM, which are then efficiently batched and applied to the real DOM, minimizing expensive and often slow DOM manipulations.

```jsx
// Example React component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    // Updating state triggers a re-render
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

### Components and State

> In React, components are the building blocks of your user interface, and state is a fundamental concept that allows you to manage and store data within a component.

#### **Components**

- Components are reusable, self-contained units that encapsulate a part of your UI. In React, you can create functional components or class components.

1. **Functional Component:**

```js
import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```

2. **Class Component:**

```js
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
```

#### **State**

- State is a way to store and manage data within a component. Class components have a `state` object, and you can use the `setState` method to update it. Functional components can use the `useState` hook to manage state.

1. **Class Component with State:**

```js
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

2. **Functional Component with State (using useState hook):**

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```

**[⬆ Back to Top](#table-of-contents)**

## **Props**:

> In React, props (short for properties) are a way to pass data from a parent component to a child component. Props are read-only, meaning that child components cannot modify their props. Instead, they receive data from their parent and use it to render content or perform actions.

1. Passing Props from Parent to Child:

- Suppose you have a parent component (Parent) and a child component (Child). You can pass data from the parent to the child by specifying props when rendering the child component.

```js
// Parent.js
import React from "react";
import Child from "./Child";

function Parent() {
  const greeting = "Hello, from Parent!";
  return (
    <div>
      <Child message={greeting} />
    </div>
  );
}

export default Parent;
```

2. Receiving Props in Child Component:

- In the child component, you can access the props by defining a function or class component and using this.props (for class components) or simply props (for functional components).

```js
// Child.js
import React from "react";

function Child(props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

export default Child;
```

#### **How to pass data from child to parent in react?**

> In React, data can be passed from a child component to a parent component by using callback functions. The child component invokes a function passed down from the parent, and this function can receive and process the data passed by the child.

1. Create the Parent Component:

```js
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [childData, setChildData] = useState("");

  // Callback function to receive data from the child
  const receiveDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>Data from Child: {childData}</h1>
      <ChildComponent sendDataToParent={receiveDataFromChild} />
    </div>
  );
}

export default ParentComponent;
```

2. Create the Child Component:

```js
import React from "react";

function ChildComponent({ sendDataToParent }) {
  const sendData = () => {
    const data = "Hello from Child!";
    sendDataToParent(data); // Call the parent's callback function with the data
  };

  return (
    <div>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
```

### **children prop :**

> In React, the children prop is a special prop that allows you to pass components or content as children to another component. It is often used when you want to nest components or provide content within a custom component. The children prop is automatically populated with any content that is placed between the opening and closing tags of the component in JSX.

```js
// ParentComponent.js
import React from "react";

function ParentComponent({ children }) {
  return (
    <div>
      <h2>Parent Component</h2>
      <div>{children}</div>
    </div>
  );
}

export default ParentComponent;
```

```js
// App.js
import React from "react";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div>
      <h1>Using the Children Prop</h1>
      <ParentComponent>
        <p>This is some content inside ParentComponent.</p>
        <button>Click me!</button>
      </ParentComponent>
    </div>
  );
}

export default App;
```

    In this example, the <p> element and <button> element, along with their content, are passed as the children prop to ParentComponent. When you render this in your application, the content inside ParentComponent will be displayed.

**[⬆ Back to Top](#table-of-contents)**

### **Array Rendering methods**

#### **Using `map` to Render an Array**:

```js
const numbers = [1, 2, 3, 4, 5];

// Using map to render each item in the array
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

// Render the result
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

#### **Using filter to Filter an Array**:

```js
const numbers = [1, 2, 3, 4, 5];

// Using filter to select even numbers
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

// Render the result
console.log(evenNumbers); // Output: [2, 4]
```

### **Renders(setInterval example)**:

```js
import React, { useState, useEffect } from "react";

function PeriodicRenderComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up an interval to update the count every 1 second (1000 milliseconds)
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this effect runs once (on mount)

  return (
    <div>
      <h1>Periodic Render Component</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default PeriodicRenderComponent;
```

**[⬆ Back to Top](#table-of-contents)**

## **React Hooks**

> Hooks basically are the methods that can be reusable from the functional component anywhere in the application to avoid redundancy of the code. Hooks can be stateful and can manage side effects. So, we can now isolate all the stateful logic in hooks and use it in the components.

### **useState**:

- useState is a hook that allows functional components to have a state.
- It returns a stateful value (state) and a function (setState) to update it.
- The initial state can be passed as an argument to useState.

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### **useEffect**

- useEffect is a hook that runs side effects in functional components.
- It takes a function as its first argument, which will be executed after rendering.
- The second argument is an optional array of dependencies, which determines when the effect should be re-run.
- If the dependencies array is empty, the effect only runs once after the initial render.
- If the effect returns a cleanup function, it will be executed when the component unmounts or when the dependencies change (cleanup phase).

```js
import React, { useEffect } from "react";

const Component = () => {
  useEffect(() => {
    // Code to run after component renders or when dependencies change

    return () => {
      // Code to run when component unmounts or when dependencies change
    };
  }, [dependencies]);
};
```

Example: -

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []); // Empty dependency array means this effect runs once (on mount)

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### **useContext**

- useContext is a hook that allows functional components to consume values from a Context.
- It takes a Context object created using React.createContext() as its argument.
- It returns the current value of the Context within the component’s hierarchy.

```js
import React, { useContext } from "react";

const MyContext = React.createContext();

const Component = () => {
  const value = useContext(MyContext);
};
```

### **useReducer**

- useReducer is a hook to manage the state in a more complex way than useState.
- It takes a reducer function and the initial state as arguments and returns the current state and a dispatch function to update it.
- The reducer function receives the current state and an action, and it returns the new state based on the action type.
- This hook is useful when state logic is more involved, like handling multiple related state changes in one place.

```js
import React, { useReducer } from "react";

const initialState = {
  /* initial state */
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      return {
        /* updated state */
      };
    default:
      return state;
  }
};

const Component = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
};
```

Example:

```js
import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
```

### **useCallback**

- useCallback is a hook that returns a memoized version of the function.
- It helps prevent unnecessary re-renders of child components that receive this function as a prop.
- The memoized function will only execute when one of the dependencies in the dependencies array changes.

```js
import React, { useCallback } from "react";

const Component = () => {
  const memoizedCallback = useCallback(() => {
    // Function to memoize
  }, [dependencies]);
};
```

Example:

```js
import React, { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Define a function that increments the count
  const increment = () => {
    setCount(count + 1);
  };

  // Use useCallback to memoize the increment function
  const memoizedIncrement = useCallback(increment, [count]);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={memoizedIncrement} />
    </div>
  );
}

function ChildComponent({ onIncrement }) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}
```

### **useMemo**

- useMemo is a hook that returns a memoized value.
- It helps prevent unnecessary re-computation of expensive calculations within a component.
- The memoized value will only change when one of the dependencies in the dependencies array changes.

```js
import React, { useMemo } from "react";

const Component = () => {
  const memoizedValue = useMemo(() => {
    // Value to memoize
  }, [dependencies]);
};
```

Example:

```js
import React, { useState, useMemo } from "react";

function ExpensiveComponent({ number }) {
  // Calculate the factorial of the number using a recursive function.
  const factorial = useMemo(() => {
    console.log(`Calculating factorial(${number})`);
    if (number <= 1) return 1;
    return number * factorial(number - 1);
  }, [number]); // The dependency array contains 'number'

  return (
    <div>
      <h2>Expensive Component</h2>
      <p>
        Factorial of {number} is {factorial}
      </p>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(5);

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent number={count} />
    </div>
  );
}
```

### **useRef**

- useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
- The ref object persists between renders and does not cause a re-render when its .current property changes.
- It can be used to store references to DOM elements, previous states, or any mutable value.

```js
import React, { useRef } from "react";

const Component = () => {
  const refContainer = useRef(initialValue);
};
```

Example:

```js
import React, { useRef, useEffect } from "react";

function FocusableInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```

### **useImperativeHandle**

- useImperativeHandle is a hook that allows a child component to pass its imperative handle to a parent component.
- It is used with the forwardRef function to enable the parent component to access functions or values of the child component.
- The first argument of useImperativeHandle is the ref object obtained from the forwardRef, and the second argument is a function that returns an object with exposed properties.

```js
import React, { useImperativeHandle, forwardRef } from 'react';

const Component = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    // Expose functions or values to parent component
  }));
};
```

Example:

```js
import React, { useRef, useImperativeHandle, forwardRef } from "react";

// Child component that will be wrapped with React.forwardRef
const Child = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Expose a function to focus the input element imperatively
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    // You can add other custom functions here
  }));

  return <input ref={inputRef} />;
});

// Parent component that uses the Child component
function Parent() {
  const childRef = useRef(null);

  const handleClick = () => {
    // Call the exposed focusInput function on the Child component
    childRef.current.focusInput();
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleClick}>Focus Input</button>
      <Child ref={childRef} />
    </div>
  );
}

export default Parent;
```

### Custom Hooks

> Custom hooks in React allow you to extract and reuse stateful logic across multiple components. They are regular JavaScript functions that follow a naming convention of starting with "use" and can call other hooks if needed. Custom hooks make it easy to share logic such as data fetching, state management, and side effects among different parts of your application.

Here's how to create and use a custom hook:

```js
import { useState, useEffect } from "react";

// Custom hook for fetching data from an API
function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage of the custom hook
function MyComponent() {
  const apiUrl = "https://api.example.com/data";
  const { data, loading, error } = useFetchData(apiUrl);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

Practical Example of custom hooks in api call:

```js
// useHttp.js
import { useState, useCallback } from "react";

const useHttp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(
    async (url, params, { handleSuccessResponse, handleErrorResponse }) => {
      setLoading(true);
      try {
        const response = await fetch(url, params);
        const data = await response.json();
        if (data.status >= 200 && data.status < 400) {
          if (handleSuccessResponse) {
            const transformedData = handleSuccessResponse(data);
            setData(transformedData);
          }
        } else {
          throw new Error("Request Error!");
        }
      } catch (error) {
        setError(error.message || error);
        handleErrorResponse && handleErrorResponse(error);
      }
      setLoading(false);
    },
    []
  );

  return {
    loading: loading,
    error: error,
    data: data,
    getData: getData,
  };
};

export default useHttp;
```

```js
// App.jsx
import { useEffect, useCallback } from "react";
import useHttp from "./hooks/use-http";

const API_URL = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

function App() {
  const { data, loading, error, getData } = useHttp();

  const successResponseHandler = useCallback((data) => {
    return data.quotes;
  }, []);

  useEffect(() => {
    getData(API_URL, null, {
      handleSuccessResponse: successResponseHandler,
    });
  }, [getData, successResponseHandler]);

  let content;
  if (loading) {
    content = <div>Busy Loading...</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else if (data) {
    content = (
      <ul>
        {data.map((quote, idx) => (
          <li key={`${quote.author}-${idx}`}>{quote.text}</li>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
}

export default App;
```

    NOTE: - We call useHttp at the top of App so that we now have access to data, loading and error states as well as getData. After calling getData in the useEffect , we then proceed to decide on the content to be displayed.

**[⬆ Back to Top](#table-of-contents)**
