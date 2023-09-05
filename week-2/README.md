<h1 style="color:yellow"><center> Intro to backend systems🧾</center></h1>

> <h3 style="color:red">What is backend development?</h3>Backend development means working on server-side software. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.

## Table Of Contents

- [Backend Structure](#backend-structure)
- [Request Methods](#request-methods)
- [Express Query Params](#express-reqparams-reqquery-and-reqbody)
- [HTTP Status Code](#http-status-code)
- [Response](#response)
- [Middleware](#using-middlewares)
- [Fetch Request](#sending-request-using-fetch)

### Backend Structure

```sh

  backend
  ├── HTTP Servers            # for communication to frontend
  |   ├── Request methods
  |   ├── URL Route
  |   ├── Query params, Headers, body
  |   ├── Status codes
  |   └── Response, HTML, JSON, Text
  |
  ├── Authentication          # for security purpose
  |
  ├── Databases               # for storing data
  |
  └── Middlewares             #  provide common services and capabilities to applications

```

## HTTP Servers

> HTTP (Hypertext Transfer Protocol) servers are software applications or services that handle incoming HTTP requests and serve web content to clients

### Request Methods

> **HTTP (Hypertext Transfer Protocol)** defines a set of request methods or HTTP verbs that indicate the desired action to be performed on a resource identified by a **URL (Uniform Resource Locator)**.

Some of the most commonly uses HTTP request methods are:-

1. **GET**: The GET method is used to request data from a specified resource. It should only retrieve data and not have any other effect on the resource. GET requests are typically used for retrieving web pages, images, or other static content. They can be cached by browsers and intermediaries.

2. **POST**: The POST method is used to submit data to be processed to a specified resource. It often results in a change to the server's state or database. POST requests are commonly used for submitting form data, uploading files, and performing various data-related operations.

3. **PUT**: The PUT method is used to update or replace a resource at a specific URL. It should be idempotent, meaning that making the same PUT request multiple times should have the same result as making it once. PUT is often used for updating existing data.

4. **PATCH**: The PATCH method is used to apply partial modifications to a resource. It is similar to PUT but is used to update only specific fields or parts of a resource, rather than replacing the entire resource.

5. **DELETE**: The DELETE method is used to request the removal of a resource at a specific URL. It deletes the resource identified by the URL. Like PUT, it should be idempotent, meaning that deleting a resource multiple times should have the same result as deleting it once.

6. **HEAD**: The HEAD method is similar to GET, but it requests only the headers of the response, not the actual content. It is often used to check if a resource exists or to retrieve metadata about a resource without downloading the entire content.

7. **OPTIONS**: The OPTIONS method is used to request information about the communication options for a resource. It can be used to determine which HTTP methods are supported by a particular resource or to check server capabilities.

### **Express: req.params, req.query and req.body**

1. **req.body**:-

- Generally used in POST/PUT requests.
- Use it when you want to send sensitive data(eg. form data) or super long JSON data to the server.

How to send data in request body: -

- Using curl

```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "ContentType: application/json" -X POST http://localhost:3000/giraffe
```

- using axios

```js
axios.post('/giraffe', {
    key1: 'value1',
    key2: 'value2'
  })
  .then(response => {
    ...
  })
  .catch(error => {
    ...
  })
```

- how to get data from request body

```js
app.get("/giraffe", (req, res) => {
  console.log(req.body.key1); //value1
  console.log(req.body.key2); //value2
});
```

NOTE: -
Remember to use express.json() middleware to parse request body else you'll get an error

```js
app.use(express.json());
```

2. **req.params**:-

> These are properties attached to the url i.e named route parameters. You prefix the parameter name with a colon(:) when writing your routes.

```js
app.get("/giraffe/:number", (req, res) => {
  console.log(req.params.number);
});
```

- To send the parameter from the client, just replace its name with the value

```js
 GET  http://localhost:3000/giraffe/1
```

3. **req.query**:-

> req.query is mostly used for searching,sorting, filtering, pagination, e.t.c

> Say for instance you want to query an API but only want to get data from page 10, this is what you'd generally use.

> **Its written as key=value**

```js
 GET  http://localhost:3000/animals?page=10
```

To access this in your express server is pretty simple too;

```js
app.get("/animals", () => {
  console.log(req.query.page); // 10
});
```

### HTTP Status Code

> HTTP supports status codes are ranging from 100 to 500.

- 1XX — informational codes
- 2XX — successful codes 🙂 — we can call them happy codes.
- 3XX — redirection codes
- 4XX — client error codes 😛 — end-user screwed up.
- 5XX — server error codes 😅 — server screwed up.

Below are some of the commonly used status codes. You can use this as a cheat sheet to refer to.

    -> 200 — OK
    -> 201 — Created
    -> 202 — Accepted
    -> 400 — Bad request
    -> 401 — Unauthorized
    -> 403 — Forbidden
    -> 404 — Not found: this is a famous one
    -> 405 — Method not allowed
    -> 500 — Internal Server Error
    -> 502 — Bad Gateway
    -> 503 — Service Unavailable

### Response:-

> You can send responses back to the client using the res object. The res object provides various methods to send responses, including:

    -> res.send(): Sends a response with the provided content. It can be text, HTML, JSON, or other data.
    -> res.json(): Sends a JSON response.
    -> res.render(): Renders an HTML template using a template engine like EJS or Handlebars.
    -> res.redirect(): Redirects the client to a different URL.

```js
app.get("/json", (req, res) => {
  // Send a JSON response
  res.json({ message: "This is a JSON response" });
});

app.get("/html", (req, res) => {
  // Send an HTML response
  res.send("<h1>This is an HTML response</h1>");
});

app.get("/redirect", (req, res) => {
  // Redirect to a different URL
  res.redirect("https://example.com");
});
```

    NOTE:-
    Using res.sendFile(): To send a file in response to an HTTP request, use the res.sendFile() method. Here's an example of how to send an HTML file when a client requests a specific route:

```js
const path = require("path");

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.get("/html-page", (req, res) => {
  // Use res.sendFile() to send an HTML file
  const filePath = path.join(__dirname, "public", "index.html");
  res.sendFile(filePath);
});
```

---

## Let the middlewares marinate

### Using Middlewares

> **Express** is a routing and middleware web framework that has minimal functionality of its own. An Express application is essentially a series of middleware funtion calls.

- **Middleware** functions are functions that have access to the request object(req), the response object (res), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware fucntions can perform the following tasks:

    - Execute any code
    - Make changes to the req and res object
    - End the request-response cycle
    - Call the next middleware function in the stack

---

### Sending Request using fetch

```js
const fetch = require("node-fetch");

const url = "https://example.com/api"; // Replace with the URL of the API you want to send the POST request to

const data = {
  key1: "value1",
  key2: "value2",
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((responseData) => {
    console.log("Response Data:", responseData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
