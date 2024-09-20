document.addEventListener("DOMContentLoaded", function () {
    var navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;

                // Initialize drawer menu
                const menuBtn = document.querySelector(".menu-btn");
                const drawer = document.querySelector(".drawer");

                menuBtn.addEventListener("click", () => {
                    drawer.classList.toggle("open");
                });

                // Dark mode toggle
                const darkModeToggle = document.getElementById("darkModeToggle");
                darkModeToggle.addEventListener("click", () => {
                    document.body.classList.toggle("dark-mode");

                    // Store dark mode preference in local storage
                    if (document.body.classList.contains("dark-mode")) {
                        localStorage.setItem("darkMode", "enabled");
                    } else {
                        localStorage.setItem("darkMode", "disabled");
                    }
                });

                // Initialize dark mode from local storage
                if (localStorage.getItem("darkMode") === "enabled") {
                    document.body.classList.add("dark-mode");
                }

                // Close drawer when clicking outside of it
                document.addEventListener("click", function(event) {
                    if (drawer.classList.contains("open") && !drawer.contains(event.target) && !menuBtn.contains(event.target)) {
                        drawer.classList.remove("open");
                    }
                });

                // Toggle search container visibility
                const searchToggle = document.getElementById('searchToggle');
                const searchContainer = document.getElementById('searchContainer');

                searchToggle.addEventListener('click', () => {
                    searchContainer.style.display = searchContainer.style.display === 'none' || searchContainer.style.display === '' 
                        ? 'block' 
                        : 'none';
                });

                // Close search box when clicking outside of it
                document.addEventListener('click', function(event) {
                    if (searchContainer.style.display === 'block' && !searchContainer.contains(event.target) && !searchToggle.contains(event.target)) {
                        searchContainer.style.display = 'none';
                    }
                });
            });
    }
});
