// List of daily messages
const messages = [
    "Stay positive and work hard!",
    "Every day is a new opportunity.",
    "Believe in yourself and all that you are.",
    "The best time to start was yesterday. The second best time is now.",
    "Good things take time, be patient."
];

// Function to get today's message based on the date
function getDailyMessage() {
    const today = new Date(); // Get today's date
    const dayOfYear = today.getDate(); // Get the day of the year (1-31)
    
    // Use the day of the year to select a message (loop through messages if needed)
    const messageIndex = dayOfYear % messages.length;
    
    return messages[messageIndex]; // Return the corresponding message
}

// Display the message on the page
document.getElementById("daily-message").innerText = getDailyMessage();

// Get the current date
const currentDate = new Date();

// Format the date in a readable format (e.g., February 4, 2025)
const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Display the date inside the span with the id "current-date"
document.getElementById('current-date').textContent = formattedDate;
