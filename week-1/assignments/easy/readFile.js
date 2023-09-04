/* Write code to read contents of a file and print it to the console. You can use the fs library 
to as a black box, the goal is to understand async tasks.Try to do an expensive operation below the file read and
see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.*/

// Answer: -

const fs = require("fs");

// Function to read the contents of a file and print it to the console
function readFileAndPrint(filePath) {
  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
      console.error("Error reading the file:", error);
    } else {
      console.log("File contents:");
      console.log(data);

      // Simulate an expensive operation (e.g., a loop)
      for (let i = 0; i < 1000000000; i++) {
        // This loop is time-consuming
      }

      console.log("Expensive operation completed.");
    }
  });
}

// Specify the file path you want to read
const filePath = "example.txt"; // Change this to your file's path

// Call the function to read and print the file
readFileAndPrint(filePath);

// Continue with other tasks, as this operation is asynchronous
console.log("Reading the file. Continuing with other tasks...");

/*
Output:
File contents:
"Hello rudra" -> the content in example.txt
Expensive operation completed.
*/
