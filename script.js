//your JS code here. If required.
const timerElement = document.getElementById("timer");

// Function to update the timer with the current date and time
const updateTime = () => {
  const now = new Date();
  const formattedTime = now.toLocaleString(); // Formats the current time and date as a string
  timerElement.textContent = formattedTime;
};

// Initial call to display the time immediately
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);
