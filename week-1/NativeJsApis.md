<h1 style="color:yellow"><center>Javascript Native API's🧾</center></h1>

> <h3 style="color:red">JS Native API's</h3>JavaScript provides a wide range of native APIs that allow you to perform various tasks, from manipulating the Document Object Model (DOM) to working with web APIs and more. Here are some examples of native JavaScript APIs and how you can use them:

1. DOM Manipulation:
   JavaScript allows you to interact with HTML documents using the Document Object Model (DOM) API.

```js
// Get an HTML element by its ID
const element = document.getElementById("myElement");

// Change its text content
element.textContent = "Updated content";

// Add an event listener
element.addEventListener("click", () => {
  console.log("Element clicked!");
});
```

2. Fetch API (for making HTTP requests):
   The Fetch API is used to make HTTP requests and handle responses.

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log("Received data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

3. LocalStorage (for client-side storage):
   You can use the localStorage API to store and retrieve data on the client side.

```js
// Storing data
localStorage.setItem("username", "JohnDoe");

// Retrieving data
const username = localStorage.getItem("username");
console.log("Username:", username);
```

4. Geolocation API (for accessing device location):
   The Geolocation API allows you to access the user's geographical location.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.error("Error getting location:", error);
    }
  );
} else {
  console.log("Geolocation is not supported in this browser.");
}
```

5. Web Storage (SessionStorage):
   The sessionStorage API is similar to localStorage but stores data for the duration of a page session.

```js
// Storing session data
sessionStorage.setItem("theme", "light");

// Retrieving session data
const theme = sessionStorage.getItem("theme");
console.log("Theme:", theme);
```

6. Canvas API (for drawing graphics):
   You can use the Canvas API to draw graphics on a web page.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);
```

7. Web Audio API (for working with audio):
   The Web Audio API allows you to create and manipulate audio in the browser.

```js
const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();

oscillator.connect(audioContext.destination);
oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
oscillator.start();
```
