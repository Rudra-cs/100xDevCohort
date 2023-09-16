<h1 style="color:yellow"><center> Databases, Storage and basic Frontend 🧾</center></h1>

Note: Read about Object.assign()

## Table Of Contents

- [Arrow fns vs Callbacks](#arrow-fns-vs-callbacks)
- [CORS](#cors)
- [Reconcilation in JS](#reconcilation-in-js)
- [JSON WebToken](#what-is-json-web-token)
- [Steps to Setup JWT Token Auth](#steps-to-setup-jwt-token-auth-in-nodejs-and-express)
- [Encryption vs Hashing](#difference-between-hashing-and-encryption)
- [Types of Databases](#types-of-databases)
- [MongoDB and Mongoose](#mongodb-and-mongooseodm)
- [Setting up MongoDB in Node.js and Express.js](#setting-up-mongoose-in-nodejs-and-express)

### Arrow fns vs Callbacks

- Easy (callback)

```js
function callback1(req, res) {
  res.json(todos);
}

app.get("/todos", callback1);
```

- Medium (Anonymous function)

```js
app.get("/todos", function (req, res) {
  res.json(todos);
});
```

- Hard (Arrow function)

```js
app.get("/todos", (req, res) => {
  res.json(todos);
});
```

**[⬆ Back to Top](#table-of-contents)**

### CORS:-

> Cross-Origin Resource Sharing (CORS) is a mechanism which aims to allow requests made on behalf of you and at the same time block some requests made by rogue JS and is triggered whenever you are making an HTTP request to:

    -> a different domain (eg. site at example.com calls api.com)
    -> a different sub domain (eg. site at example.com calls api.example.com)
    -> a different port (eg. site at example.com calls example.com:3001)
    -> a different protocol (eg. site at https://example.com calls http://example.com)

- If your browser tries to make a “non simple” request (eg. an request that includes cookies, or which Content-type is other than application/x-ww-form-urlencoded, multipart/form-data or text-plain) an mechanism called **preflight** will be used and an OPTIONS request will be sent to the server.

#### Access-Control-Allow-Origin

- This header is meant to be returned by the server, and indicate what client-domains are allowed to access its resources. The value can be:

      -> * — allow any domain
      -> a fully qualified domain name (eg. https://example.com)

**Note**:- If you require the client to pass authentication headers (e.g. cookies) the value can not be \* — it must be a fully qualified domain!

#### How to fix the CORS “error”?

- You have to understand that the CORS behavior is not an error — it’s a mechanism that’s working as expected in order to protect your users, you, or the site you’re calling.

1. **Case I**: -

   > I’m developing the frontend and have control of or know the person developing the backend

   > **Solution**: - This is the best case scenario — you should be able to implement the proper CORS response on the server which you’re calling. If the API is using express for node you can use the simple cors package. If you want to make your site properly secure, consider using a whitelist for the Access-Control-Allow-Origin header.

2. **Case II**:- I’m developing the frontend but have no control of the backend now, I need a temporary solution

   > This is the second-best scenario, because it’s just the A one, but with some time constrains. To temporary fix the issue you can make your browser ignore CORS mechanism — for example use the ACAO Chrome extension or by disabling it completely by running Chrome with the following flags:

```sh
chrome --disable-web-security --user-data-dir
```

**[⬆ Back to Top](#table-of-contents)**

### Reconcilation in JS

> In JavaScript, reconciliation usually refers to a process commonly associated with front-end web development libraries and frameworks, particularly React.

- React, a popular JavaScript library for building user interfaces, uses a virtual DOM (Document Object Model) and a process called reconciliation to efficiently update the actual DOM when the state of a component changes. Reconciliation is the process of determining the differences between the current virtual DOM and the previous virtual DOM, and then applying the necessary updates to the actual DOM to reflect those changes.

Here's how the reconciliation process works in React:

1.  Render Virtual DOM: When you create a React component, it returns a virtual DOM representation of the UI based on the component's state and props.

2.  Diffing: React performs a diffing (or reconciliation) process by comparing the new virtual DOM with the previous virtual DOM. It identifies the differences between the two trees. This process is often called "virtual DOM diffing" or "reconciliation algorithm."

3.  Updating the DOM: After identifying the differences (the "diffs"), React applies the necessary updates to the actual DOM to reflect the changes. React tries to minimize the number of real DOM manipulations by batching and optimizing updates.

        The goal of reconciliation is to make updates to the DOM as efficient as possible by only updating the parts of the DOM that have changed. This is important for performance because directly manipulating the DOM can be slow and costly. By using a virtual DOM and reconciliation, React minimizes the number of changes to the real DOM, resulting in faster and more efficient updates.

```js
// Initial render
const element = <div>Hello, world!</div>;
ReactDOM.render(element, document.getElementById("root"));

// Update the content
const updatedElement = <div>Hello, React!</div>;
ReactDOM.render(updatedElement, document.getElementById("root"));
```

**[⬆ Back to Top](#table-of-contents)**

### **What is JSON Web Token?**

> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

#### **When should you use JSON Web Tokens?**

    1. Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

    2. Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.

#### **What is the JSON Web Token structure?**

- In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

  - Header
  - Payload
  - Signature

Therefore, a JWT typically looks like the following.

```
xxxxx.yyyyy.zzzzz
```

#### **Header**

- The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.
  For Example: -

```js
{
  "alg": "HS256",
  "typ": "JWT"
}
// Then, this JSON is Base64Url encoded to form the first part of the JWT.
```

#### **Payload**

- The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

#### **Signature**

- To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

### Steps to setup JWT Token Auth in Node.js and Express

1. Install the dependencies for your application

```js
npm install express jsonwebtoken body-parser
```

2. Set Up Your Express Application:

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
```

3. Create User Model:

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);
```

4. User Registration and Login:

```js
// Register route
app.post("/register", async (req, res) => {
  // Handle user registration and password hashing
  // Save user data to the database
});

// Login route
app.post("/login", async (req, res) => {
  // Handle user login and JWT token creation
});
```

5. Generate JWT Tokens:

```js
const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key"; // Replace with a secure secret key

// Function to generate a JWT token
function generateToken(user) {
  const payload = {
    userId: user._id,
    username: user.username,
  };
  const options = {
    expiresIn: "1h", // Token expiration time
  };
  return jwt.sign(payload, secretKey, options);
}
```

6. Middleware for Authentication:

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
```

7. Protect Routes:

```js
app.get("/protected", authenticateToken, (req, res) => {
  // This route is protected and can only be accessed with a valid JWT token
  res.json({ message: "Protected route accessed successfully." });
});
```

8. Start the Server:

```js
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

});
```

9. Testing:

- Test your authentication by registering users, logging in, and accessing protected routes with valid tokens.
- Remember to replace **'your-secret-key'** with a strong and secure secret key in production. Additionally, consider using environmental variables to store sensitive information like secret keys and database connection strings.

**[⬆ Back to Top](#table-of-contents)**

### Difference between Hashing and Encryption:

#### Encryption:

```js
const crypto = require("crypto");
const algorithm = "aes-256-cbc"; // Encryption algorithm
const secretKey = "supersecretkey"; // Encryption key

// Text to be encrypted
const plaintext = "Hello, World!";

// Create an encryption cipher
const cipher = crypto.createCipher(algorithm, secretKey);

// Encrypt the plaintext
let encryptedText = cipher.update(plaintext, "utf-8", "hex");
encryptedText += cipher.final("hex");

console.log("Encrypted:", encryptedText);

// Decryption
const decipher = crypto.createDecipher(algorithm, secretKey);
let decryptedText = decipher.update(encryptedText, "hex", "utf-8");
decryptedText += decipher.final("utf-8");

console.log("Decrypted:", decryptedText);
```

```js
const crypto = require("crypto");

// Data to be hashed
const dataToHash = "Hello, World!";

// Create a hash using SHA-256
const hash = crypto.createHash("sha256");

// Update the hash with data
hash.update(dataToHash);

// Get the hexadecimal representation of the hash
const hashedData = hash.digest("hex");

console.log("Hashed:", hashedData);

// Hashing is not reversible; you cannot obtain the original data from the hash
```

> **NOTE:** - In the code for encryption, we use an encryption algorithm and a secret key to encrypt and decrypt data. It's a reversible process, meaning you can recover the original data with the decryption key.

> **NOTE:** - In the code for hashing, we use a hashing algorithm (SHA-256 in this case) to create a fixed-size hash value from the input data. Hashing is a one-way process; you cannot reverse it to obtain the original data. It's commonly used for password storage and data integrity verification.

---

**[⬆ Back to Top](#table-of-contents)**

### **_Types of Databases:_** -

---

| Database Type                | Examples                                        | Structure                    | Data Model                                   | Query Language                      | Consistency                   | Scalability                                    | Use Cases                                                              |
| ---------------------------- | ----------------------------------------------- | ---------------------------- | -------------------------------------------- | ----------------------------------- | ----------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------- |
| Relational Databases (RDBMS) | MySQL, PostgreSQL, Oracle, Microsoft SQL Server | Tables with rows and columns | Structured schema with predefined data types | SQL (Structured Query Language)     | ACID Transactions             | Vertical and some horizontal scaling           | Business applications, relational data modeling                        |
| NoSQL Databases              | MongoDB, Cassandra, Couchbase, Redis            | Various data models          | Schema-less or flexible schema               | Specialized query languages or APIs | Eventual Consistency (varies) | Horizontal scaling; distributed systems        | Unstructured/semi-structured data, real-time apps, rapid scaling       |
| Columnar Databases           | Amazon Redshift, Google BigQuery                | Column storage               | Tabular structure for data warehousing       | SQL for analytical queries          | Consistent (varies)           | Horizontal scaling and parallel processing     | Data warehousing, OLAP, business intelligence                          |
| In-Memory Databases          | Redis, Memcached, Apache Ignite                 | Data in memory               | Key-value, document, or others               | Key-based operations                | Consistent (varies)           | High-speed data access, limited by memory size | Caching, real-time analytics, low-latency data access                  |
| Graph Databases              | Neo4j, Amazon Neptune                           | Nodes and edges in a graph   | Modeling and querying relationships          | Graph query languages like Cypher   | Consistent (varies)           | Horizontal scaling (varies)                    | Social networks, recommendation engines, complex relationship modeling |
| Time-Series Databases        | InfluxDB, Prometheus                            | Time-series data             | Timestamps and tags/labels                   | Often have their query languages    | Consistent (varies)           | Scalable for time-series data                  | Monitoring, IoT, tracking data over time                               |

**[⬆ Back to Top](#table-of-contents)**

### **MongoDB and Mongoose(ODM)**

> MongoDB is a popular NoSQL database that uses a flexible, schema-less document model. It's often used in modern web development due to its scalability and ease of use. Mongoose is an Object Data Modeling (ODM) library for MongoDB in Node.js, which provides a higher-level, schema-based abstraction for interacting with MongoDB.

#### MongoDB Concepts: -

- **Collections**: In MongoDB, data is organized into collections. A collection is a group of MongoDB documents. It's roughly equivalent to a table in a relational database.

- **Documents**: Documents are individual records or data entries within a collection. They are stored in BSON (Binary JSON) format, which is a JSON-like binary representation. Documents in a collection can have different structures.

#### **Mongoose:** -

- Object Data Modeling (ODM):-

      Mongoose is an ODM library that allows you to define schemas and models for your MongoDB data. It provides an abstraction layer over MongoDB, making it easier to work with data in a structured manner.

### **Setting Up Mongoose in Node.js and Express:**

1. **Install Mongoose:**

```js
npm install mongoose
```

2. **Create a Connection:**

```js
const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle connection events
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
```

> Replace 'mongodb://localhost/mydatabase' with the URL of your MongoDB server. The useNewUrlParser and useUnifiedTopology options are recommended to avoid deprecation warnings.

3. **Define a Schema:**

```js
const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
});

// Create a model from the schema
const BlogPost = mongoose.model("BlogPost", blogPostSchema);
```

4. **Create and Save Documents:**

```js
const newPost = new BlogPost({
  title: "My First Blog Post",
  content: "This is the content of my blog post.",
  author: "John Doe",
});

newPost.save((err, savedPost) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Blog post saved:", savedPost);
  }
});
```

5. **Query the Database:**

```js
// Find all blog posts
BlogPost.find({}, (err, posts) => {
  if (err) {
    console.error(err);
  } else {
    console.log("All blog posts:", posts);
  }
});

// Find a blog post by title
BlogPost.findOne({ title: "My First Blog Post" }, (err, post) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Found blog post:", post);
  }
});
```

**[⬆ Back to Top](#table-of-contents)**

Give yourself a praise for this.
