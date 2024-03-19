// Function to show the corresponding section and hide others
function showSection(sectionId) {
    var sections = document.querySelectorAll('main > div');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Function to handle navigation based on hash values
function handleNavigation() {
    var hash = window.location.hash.substr(1);

    if (hash) {
        showSection(hash);
    } else {
        showSection('home');
    }
}

window.addEventListener('DOMContentLoaded', handleNavigation);

var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = link.getAttribute('href').substr(1);
        window.location.hash = targetId;
        showSection(targetId);
    });
});

var contactButton = document.querySelector('.button[href="#application"]');
if (contactButton) {
    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.hash = 'application';
        showSection('application');
    });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            alert('Thank you, we will contact you soon.');
        } else {
            alert('There was a problem with your submission. Please try again.');
        }
    };
    xhr.send(formData);
}

var form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleSubmit);
}