<h1 style="color:yellow"><center> Databases, Storage and basic Frontend 🧾</center></h1>

foudnation for databases
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
