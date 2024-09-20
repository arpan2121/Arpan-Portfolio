

document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Initialize dark mode from local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.classList.replace('fa-moon', 'fa-sun'); // Ensure the icon is correctly set when page loads
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled'); // Save dark mode state
        } else {
            darkModeToggle.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', 'disabled'); // Save light mode state
        }
    });
});



// const darkModeToggle = document.getElementById('darkModeToggle');
// const body = document.body;

// // Toggle dark mode
// darkModeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
    
//     if(body.classList.contains('dark-mode')) {
//         darkModeToggle.classList.replace('fa-moon', 'fa-sun');
//     } else {
//         darkModeToggle.classList.replace('fa-sun', 'fa-moon');
//     }
// });