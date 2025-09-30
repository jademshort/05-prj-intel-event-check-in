const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");


const greeting = document.getElementById("greeting");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");

let count = 0;
const maxCount = 50;

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

  // Calculate and update progress bar width
  const percentage = Math.round((count / maxCount) * 100);
  progressBar.style.width = percentage + "%";
  progressBar.textContent = "";
  console.log(`Progress: ${percentage}%`);

  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  form.reset();
});