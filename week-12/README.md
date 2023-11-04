<h1 style="color:yellow"><center>OPENAPI SPEC and Monorepo deployment  🧾</center></h1>

## Table Of Contents

- []()

**[⬆ Back to Top](#table-of-contents)**

- Open API Specification

  - End goals
    1. Create chatgpt plugin
    2. Create clients
    3. Zerodha bug

- What is an Open API?

  > The OpenAPI Specification (OAS) is a framework used by developers to build applications that interact with REST APIs. The specification defines how to communicate with an API, what information can be requested, and what information can be returned. With OpenAPI, developers can ensure their APIs are consistent with the industry standards and can easily integrate their applications with other services.

- An OpenAPI file describes an API in its entirety, including:

  - Endpoints: which are available (/users) and operations on each (GET /users, POST /users)
  - Authentication methods
  - Operation parameters for each operation (Input and output)
  - Contact information, terms of use, license, and other information

- You should use the OpenAPI Specification (OAS) when you want to:

  1. Design and document your API clearly.
  2. Easily version and manage your API.
  3. Facilitate communication between clients and servers.
  4. Generate code and SDKs.
  5. Test and validate your API.
  6. Manage, secure, and analyze your API traffic.
  7. Collaborate effectively in teams.
  8. Simplify third-party integrations.
  9. Benefit from a widely supported standard.
  10. Automatically generate API documentation.

- CLasses in TS

  - Lets create a Date class
  - Decorators

- Decorators in TypeScript are a feature that allow you to add metadata or behavior to class declarations, methods, and properties. They are a way to annotate and modify the behavior of classes and their members during the compile-time phase. Decorators are applied using the @ symbol followed by a function or an expression.
  `https://github.com/NetanelBasal/helpful-decorators` go to this file for reference

- Lets create a todo app with the
  Open API Spec
  1. Define the controllers
  2. Inspect the auto-generated routes file
  3. Inspect the OpenAPI file
  4. Import in Postman
  5. Create a swagger page
  6. Create a TS client - openapi-typescript-codegen
  7. Descriptions for ChatGPT

Follow this repo `https://github.com/lukeautry/tsoa`

So, the main purpose of creating an openapi Spec is if ever you change the url endpoints which are connected to any devices need to always change so fo that we use openapi client.
The main purpose of creating an OpenAPI specification is to have a standardized and documented contract for your API. This contract includes the details of your API's endpoints, request and response formats, and how to interact with your API.

When you have an OpenAPI specification, it serves as a common agreement between the API provider and consumers. If you make changes to your API, the specification helps ensure that everyone is on the same page. This is valuable because:

Consistency: Changes to API endpoints or data structures are documented in the specification, so all parties know what to expect.

Communication: It facilitates communication between teams working on different parts of the system or third-party developers integrating with your API.

Code Generation: You can generate client SDKs based on the specification, making it easier for consumers to interact with your API.

In essence, the OpenAPI specification helps keep everyone in sync, reduces errors, and eases the process of making and consuming API changes.

```sh
# The code to make the node-client folder
npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c fetch

```

```js
import { DefaultService } from "../node-client";

DefaultService.getTodo("asd"); // This is how you can make api call without having any tension of changes in the main route
```

- Hands on learning of React + next.js

Building Youtube in React from scratch using tailwind css
