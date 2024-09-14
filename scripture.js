// Update the current date and time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString();
    document.getElementById('current-time').textContent = `${dateString} ${timeString}`;
}

// Call the updateTime function every second
setInterval(updateTime, 1000);

// Placeholder for map integration
function initMap() {
    // Here you would integrate a real map API like Google Maps or OpenStreetMap
    console.log('Map initialized');
}

// Initialize the map when the page loads
window.onload = initMap;
function handleDriverLogin(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get username and password values
    const username = document.getElementById('driver-username').value;
    const password = document.getElementById('driver-password').value;

    // Here, you'd typically send a request to the server to validate the credentials.
    // For now, we'll just simulate a successful login.

    // Simulating login success
    if (username && password) {
        // You can store user information in localStorage/sessionStorage if needed.
        // localStorage.setItem('driverLoggedIn', true);

        // Redirect to the driver's dashboard page
        window.location.href = "driver-dashboard.html"; // Redirects to another page
    } else {
        alert('Please enter valid credentials.');
    }
}
