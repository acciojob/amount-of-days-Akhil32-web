//your JS code here. If required.
function daysOfAYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  }
}

// Get input from user
const year = Number(prompt("Enter year:"));

// Show result
alert(daysOfAYear(year));
