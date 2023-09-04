/*Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM) */

function displayTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");

  console.log(`${formattedHours}:${minutes}:${seconds} ${amPm}`);
}

// Display the time immediately and update every second
displayTime();
let intervalId = setInterval(displayTime, 1000);

// Stop the clock after 10 seconds (10000 milliseconds)
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Clock stopped.");
}, 10000); // Change the time (in milliseconds) to stop the clock after a different duration
