/* Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
hello     world    my    name   is       raman

After the program runs, the output should be
hello world my name is raman*/

const fs = require("fs");

// File path (change this to your file's path)
const filePath = "example.txt";

// Read the file
fs.readFile(filePath, "utf8", (error, data) => {
  if (error) {
    console.error("Error reading the file:", error);
    return;
  }

  // Remove extra spaces by replacing multiple spaces with a single space
  const cleanedContent = data.replace(/\s+/g, " ");

  // Write the cleaned content back to the same file
  fs.writeFile(filePath, cleanedContent, "utf8", (writeError) => {
    if (writeError) {
      console.error("Error writing to the file:", writeError);
    } else {
      console.log("Extra spaces removed and content saved successfully.");
    }
  });
});

/*
Certainly! Here's a concise explanation of the regular expression `/\\s+/g`:

- `/`: Delimiters: Regular expressions in JavaScript are enclosed in 
        forward slashes `/`, which mark the beginning and end of the pattern.

- `\\s`: Represents any whitespace character, 
            including spaces, tabs, and line breaks.

- `+`: A quantifier that means "one or more." 
        It matches one or more consecutive whitespace characters.

- `g`: A flag that stands for "global.
        " It tells the regular expression to find and replace all occurrences
         of the pattern in the input string, not just the first one.

So, `/\\s+/g` searches for and replaces all sequences of one or more 
            consecutive whitespace characters with a single space `" "` in the input string.
*/
