/*Using the fs library again, try to write to the contents of a file. 
You can use the fs library to as a black box, the goal is to understand async tasks. */

/* <Note:->
    writeFile - writes the whole file to new content
    appendFile - appends the existing content in file with new content
</Note:-> */

const fs = require("fs");

// Function to read the contents of a file and print it to the console
function readFileAndPrint(filePath) {
  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
      console.error("Error reading the file:", error);
    } else {
      console.log("File contents:");
      console.log(data);
    }
  });
}

// Fucntion to write the contents of a file and print it to console
function writeFileAndPrint(filePath) {
  fs.writeFile(filePath, data, "utf-8", (error) => {
    if (error) {
      console.error("Error reading the file:", error);
    } else {
      console.log("File contents After writeFile:");
      readFileAndPrint(filePath);
    }
  });
}

// Fucntion to append the contents of a file and print it to console
function appendFileAndPrint(filePath) {
  fs.appendFile(filePath, appendData, "utf-8", (error) => {
    if (error) {
      console.error("Error reading the file:", error);
    } else {
      console.log("File contents After AppendFile:");
      readFileAndPrint(filePath);
    }
  });
}

const filePath = "example.txt"; // content - > Rudra is

const data = "A footballer in process.";
const appendData = " Mr. Rudra Behera.";

writeFileAndPrint(filePath);

setTimeout(() => {
  appendFileAndPrint(filePath);
}, 4000);

/*
Output:-
Initial File Content - Rudra is

File contents After writeFile:
File contents:
A footballer in process.


File contents After AppendFile:
File contents:
A footballer in process. Mr. Rudra Behera.
*/
