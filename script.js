// Existing modal functionality code
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('login-selection').classList.add('active');
});

// Close modal when clicking outside the form
window.addEventListener('click', function(event) {
    const activeModal = document.querySelector('.modal.active');
    if (activeModal && !event.target.closest('.login-container') && !event.target.closest('#login-link')) {
        activeModal.classList.remove('active');
    }
});

const olaMaps = new OlaMapsSDK.OlaMaps({
    apiKey: 'DeJcMxop2KQPHEW9IwKsvZxxxElRbA1IVHzg96eW',
  });
  const myMap = olaMaps.init({
    style: "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
    container: 'map',
    center: [77.61648476788898, 28.358982],
    zoom: 15,
  });

  window.onload = initMap;

function selectLevel(level) {
    document.getElementById('login-selection').classList.remove('active');
    if (level === 'driver') {
        document.getElementById('driver-login').classList.add('active');
    } else if (level === 'authority') {
        document.getElementById('authority-login').classList.add('active');
    }
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Function to open Sign-Up form
function openSignUp() {
    closeModal(); // Close other modals
    document.getElementById('signup').classList.add('active');
}

// Function to clear forms on submit and simulate login/signup
function handleFormSubmission(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default form submission
        form.reset();  // Reset the form fields
        window.location.href = 'driver.html';  // Redirect to driver.html
    });
}
// Attach form submission handlers
document.addEventListener('DOMContentLoaded', () => {
    handleFormSubmission('driver-login-form');
    handleFormSubmission('authority-login-form');
    handleFormSubmission('signup-form');
});
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-100px";  // Adjust this value based on the navbar height
        } else {
            // Scrolling up
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
    });
});