<h1 style="color:yellow"><center>React.js Practice  🧾</center></h1>

## Table Of Contents

- [**React Router DOM**](#react-router-dom)
  - [How to Configure Routes In React](#how-to-configure-routes-in-react)
  - [How to Access Configured Routes with Links](#how-to-access-configured-routes-with-links)
  - [How to Navigate Programmatically in React](#how-to-navigate-programmatically-in-react)
  - [How to Implement Lazy Loading with React Router](#how-to-implement-lazy-loading-with-react-router)
  - [<em>HashRouter</em>](#hashrouter)
- [<em>**Flexbox**</em>](#flexbox)
- [<em>**Css Grid**</em>](#css-grid)
- [**Object Destructuring**](#object-destructuring)
- [**Bearer Auth Token**](#bearer-auth-token)
  - [Practical Working of Auth Token:](#practical-working-of-auth-token)
- [**useParams Hook**](#useparams-hook)
- [**Prop Drilling**](#prop-drilling)
- [**Context API**](#context-api)
- [**Recoil(State Management Library)**](#recoilstate-management-library)

### **React Router DOM**

> Routing is the process of redirecting a user to different pages based on their action or request. In React routing, you'll be using an external library called React router, which can be difficult to configure if you don't understand how it works.

Installation: -

```js
npm install react-router-dom
```

#### How to Configure Routes In React

```js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import CreateCourse from "./components/CreateCourse";
import Register from "./components/Register";
import ShowCourses from "./components/ShowCourses";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<CreateCourse />} />
        <Route path="/courses" element={<ShowCourses />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
```

#### How to Access Configured Routes with Links

```js
// Components/NavBar.js
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
```

#### How to Navigate Programmatically in React

> Programmatic navigation is the process of navigating/redirecting a user as a result of an action on a route, such as a login or a signup action, order success, or when he clicks on a back button.

```js
// Products.js
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">
        <h1>Order Product CockTails</h1>
      </div>
      <button className="btn" onClick={() => navigate("order-summary")}>
        Place Order
      </button>
    </div>
  );
};

export default Products;
```

**Note:** We already created a route with the path order-summary, so when this button is clicked, the user is automatically navigated to the orderSummary component attached to this route. We can also use this hook to handle the back button in the following manner:

```js
<button className="btn" onClick={() => navigate(-1)}>
  Go Back
</button>
```

#### How to Implement Lazy Loading with React Router

> Lazy loading is a technique in which components that are not required on the home page are not loaded until a user navigates to that page, allowing our application to load faster than having to wait for the entire app to load at once. This contributes to improved performance, which leads to a positive user experience.

```js
// App.js
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Products = lazy(() => import("./Pages/Products"));
const ProductDetails = lazy(() => import("./Pages/ProductDetails"));
const NoMatch = lazy(() => import("./Components/NoMatch"));

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
```

**[⬆ Back to Top](#table-of-contents)**

#### <em>HashRouter</em>

> `<HashRouter>` is for use in web browsers when the URL should not (or cannot) be sent to the server for some reason. This may happen in some shared hosting scenarios where you do not have full control over the server. In these situations, `<HashRouter>` makes it possible to store the current location in the hash portion of the current URL, so it is never sent to the server.

Example:

```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>{/* The rest of your app goes here */}</HashRouter>,
  root
);
```

- **basename**:
  Configure your application to run underneath a specific basename in the URL:

```js
function App() {
  return (
    <HashRouter basename="/app">
      <Routes>
        <Route path="/" /> {/* 👈 Renders at /#/app/ */}
      </Routes>
    </HashRouter>
  );
}
```

- **future**:
  An optional set of Future Flags to enable. We recommend opting into newly released future flags sooner rather than later to ease your eventual migration to v7.

```js
function App() {
  return (
    <HashRouter future={{ v7_startTransition: true }}>
      <Routes>{/*...*/}</Routes>
    </HashRouter>
  );
}
```

**[⬆ Back to Top](#table-of-contents)**

### <em>**Flexbox**</em>

> Flexbox is a one dimensional specification that allows us to choose between a row and a column as our main axis for the layout.

<img src="./images/
cssFlex1.png">
<img src="./images/
cssFlex2.png">

**[⬆ Back to Top](#table-of-contents)**

### <em>**Css Grid**</em>

> If you’ve used flexbox, the grid container should look extremely familiar. It’s a wrapper that makes all its direct children into grid items. In order to make the grid container you need to set the display property to either grid or inline-grid.

<img src="./images/
GridCheatSheet1.png">
<img src="./images/
GridCheatSheet2.png">
<img src="./images/
GridCheatSheet3.png">

**[⬆ Back to Top](#table-of-contents)**

### **Object Destructuring**

> In JavaScript, object destructuring is a feature that allows you to extract values from objects and assign them to variables in a concise and readable way. It is particularly useful when you want to access specific properties of an object without having to reference the object multiple times. Here's how object destructuring works:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
};
```

You can use object destructuring to extract values from this object:

```js
// Destructure the object to extract specific properties
const { firstName, lastName, age } = person;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'
console.log(age); // 30
```

**[⬆ Back to Top](#table-of-contents)**

### **Bearer Auth Token**

> Bearer token authentication is a method of securing access to an API or resource by including a bearer token in the request headers. The bearer token is a security token that the client provides to the server to prove its identity and gain access to a protected resource. It is a common method used for implementing authentication in web applications and APIs.

```js
Authorization: Bearer <your-access-token>
```

- Bearer token authentication is commonly used with OAuth 2.0 and JWT (JSON Web Tokens) for securing APIs and web applications. OAuth 2.0 is a protocol for authorization, and JWT is a format for representing claims securely between two parties.

#### Practical Working of Auth Token:

- To pass a Bearer token in the header of an HTTP request, you typically set an "Authorization" header with the word "Bearer" followed by the token value. Here's an example of how to do this using the Axios library in JavaScript:

```js
const axios = require("axios");

// Replace 'your-access-token' with your actual Bearer token
const accessToken = "your-access-token";

// Set up the request headers
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

// Define the API endpoint and request details
const apiUrl = "http://example.com/api/resource"; // Replace with your API endpoint
const requestData = {
  // Your request data (e.g., method, body, etc.)
};

// Make the HTTP request with the Bearer token in the header
axios
  .post(apiUrl, requestData, { headers })
  .then((response) => {
    // Handle the response
    console.log("Response:", response.data);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error:", error.message);
  });
```

**[⬆ Back to Top](#table-of-contents)**

### **useParams Hook**

> The useParams hook is a part of the React Router library (v5+), and it allows you to access and extract parameters from the URL in your React components. This is especially useful for components that are rendered based on dynamic routes with URL parameters.

```js
import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  // Access and extract the 'userId' parameter from the URL
  const { userId } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default UserProfile;
```

```js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:userId">
          <UserProfile />
        </Route>
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;
```

**[⬆ Back to Top](#table-of-contents)**

### **Prop Drilling**

> Prop drilling, also known as "props drilling" or "component drilling," is a situation in React where you need to pass data from a higher-level component to a lower-level component through several intermediary components. It occurs when you have a deep component tree, and data or props need to be passed down from the top-level parent component to a deeply nested child component. Prop drilling can make your code less maintainable and less readable.

```js
// Top-level parent component
function App() {
  const data = "Hello, world!";

  return (
    <div>
      <Header data={data} />
      <Main data={data} />
      <Footer data={data} />
    </div>
  );
}

// Intermediate component
function Header({ data }) {
  return <header>{data}</header>;
}

// Intermediate component
function Main({ data }) {
  return <main>{data}</main>;
}

// Child component
function Footer({ data }) {
  return <footer>{data}</footer>;
}
```

- To address prop drilling and make your code more maintainable, you can consider the following alternatives:

       1.Context API: React's Context API allows you to share data across components without the need for explicit prop drilling. It creates a "context" that can be accessed by any component within the provider hierarchy. This is especially useful for global data or themes.

      2.State Management: Consider using a state management library like Redux or Mobx to centralize and manage application state. These libraries provide a global store that can be accessed by any component, eliminating the need for prop drilling.

      3.Higher-Order Components (HOCs): You can create higher-order components that wrap around components that need access to certain props, providing those props as needed.

      4.Render Props: You can use the render prop pattern where a component accepts a function as a prop that can be used to render content or pass data.

      5.Hooks: With React hooks like useState and useContext, you can manage and share state and context more effectively than prop drilling.

**[⬆ Back to Top](#table-of-contents)**

### **Context API**

> The Context API in React can help alleviate prop drilling by providing a way to share data and state between components without passing props explicitly, **it doesn't inherently solve the issue of unnecessary component re-renders when state changes.**

- Here's an example of how to use the Context API in React to manage and share state between components. In this example, we'll create a simple counter application using the Context API:

```js
import React, { createContext, useContext, useState } from "react";

// Step 1: Create a Context
const CounterContext = createContext();

// Step 2: Create a Provider
function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // Step 3: Provide the state and functions to the children
  const contextValue = {
    count,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
}

// Step 4: Create custom hooks for accessing the context
function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}

// Step 5: Use the Provider and custom hook in components
function CounterDisplay() {
  const { count } = useCounter();

  return <div>Count: {count}</div>;
}

function CounterControls() {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <div>
        <h1>Counter App</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
}

export default App;
```

> **NOTE:- useState rerenders every coponent with setState is updated**

**[⬆ Back to Top](#table-of-contents)**

### **Recoil(State Management Library)**

```js
// CounterApp.js

import React from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";

// Step 2: Create a Recoil atom to store the counter state
const counterState = atom({
  key: "counterState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (initial value)
});

function Counter() {
  // Step 3: Read and update the counter state using Recoil hooks
  const [count, setCount] = useRecoilState(counterState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      {/* Step 4: Render the Counter component */}
      <Counter />
    </RecoilRoot>
  );
}

export default App;
```

**[⬆ Back to Top](#table-of-contents)**
