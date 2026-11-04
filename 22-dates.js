// Current date and time
const now = new Date();
console.log(now);

// Current year
console.log(now.getFullYear());

// Month starts at zero
console.log(now.getMonth() + 1);

// Day of the month
console.log(now.getDate());

// Day of the week: Sunday is 0
console.log(now.getDay());

// Hours and minutes
console.log(now.getHours());
console.log(now.getMinutes());

// Create a specific date
const birthday = new Date("2005-05-20T00:00:00");
console.log(birthday);

// Create a date using numbers
const date = new Date(2026, 9, 26);
console.log(date);

// Format as a readable date
console.log(now.toLocaleDateString());

// Format date and time
console.log(now.toLocaleString());

// Format with a specific locale
console.log(now.toLocaleDateString("en-GB"));

// Compare dates
const firstDate = new Date("2026-01-01");
const secondDate = new Date("2026-12-31");
console.log(firstDate < secondDate);

// Calculate difference in milliseconds
const difference = secondDate - firstDate;
console.log(difference);

// Convert milliseconds into days
const days = difference / (1000 * 60 * 60 * 24);
console.log(days);

// Add seven days
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek);

// Get a timestamp
console.log(Date.now());

// ISO date format
console.log(now.toISOString());

// Display current year in a message
console.log(`Current year: ${now.getFullYear()}`);

// Note: displayed local time depends on the computer's timezone.