<h1 style="color:yellow"><center> Databases, Storage and basic Frontend 🧾</center></h1>

foundation for databases
connecting frontend to backend
AJAX
cors
DOM

## Table Of Contents

- [Arrow fns vs Callbacks](#arrow-fns-vs-callbacks)
- [Request Methods](#request-methods)
- [Express Query Params](#express-reqparams-reqquery-and-reqbody)
- [HTTP Status Code](#http-status-code)

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
