const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");


const greeting = document.getElementById("greeting");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");


// Load counts from localStorage or start at 0
let count = parseInt(localStorage.getItem("attendeeCount")) || 0;
const maxCount = 50;
let teamCounts = {
  water: parseInt(localStorage.getItem("waterCount")) || 0,
  zero: parseInt(localStorage.getItem("zeroCount")) || 0,
  power: parseInt(localStorage.getItem("powerCount")) || 0
};

// Set initial values on page load
attendeeCount.textContent = count;
document.getElementById("waterCount").textContent = teamCounts.water;
document.getElementById("zeroCount").textContent = teamCounts.zero;
document.getElementById("powerCount").textContent = teamCounts.power;

// Set progress bar on page load
const percentage = Math.round((count / maxCount) * 100);
progressBar.style.width = percentage + "%";
progressBar.textContent = "";

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;


  // Show welcome message on the page and in the console
  const message = `Welcome, ${name} from ${teamName}!`;
  greeting.textContent = message;
  console.log(message);
  // Log name and teamName for grading
  console.log(name, teamName);

  count++;
  console.log("Total Check-Ins: ", count);

  // Update total attendee count in the attendance bar
  attendeeCount.textContent = count;
  localStorage.setItem("attendeeCount", count);

  // Calculate and update progress bar width
  const percentage = Math.round((count / maxCount) * 100);
  progressBar.style.width = percentage + "%";
  progressBar.textContent = "";
  console.log(`Progress: ${percentage}%`);

  // Update team count and save to localStorage
  teamCounts[team]++;
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = teamCounts[team];
  localStorage.setItem(team + "Count", teamCounts[team]);

  form.reset();
});