// Get references to the HTML elements
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

// Set the target date and time for the countdown
const targetDate = new Date("December 21, 2024 11:11:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  const d = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const h = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const m = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  days.innerText = d;
  hours.innerText = h;
  mins.innerText = m;
  secs.innerText = s;

  // If the countdown is finished, display a message
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML =
      "🌗 Our moon is currently obscured by clouds due to the scheduled monsoon. It will be visible again shortly. Thanks for hanging in there with us!";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
