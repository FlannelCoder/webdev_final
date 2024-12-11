/* 
Name: Adam Martin
Date: 12/01/2024
filename: scripts.js
*/

// Darkmode button link
const button = document.getElementById('dm_button');

// Toggles darkmode and stores it in localStorage
button.addEventListener('click', function() {
    var element = document.body;
    element.classList.toggle('dark-mode');

    // Stores in localStorage
    if (element.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// Checks if dark mode was enabled
window.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});