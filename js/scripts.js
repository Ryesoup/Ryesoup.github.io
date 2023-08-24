document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    let navToggle = document.getElementById('nav-toggle');
    let mainNav = document.getElementById('main-nav');

    if(navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });

        // Overlay for mobile menu
        let overlay = document.querySelector('.overlay');

        if (overlay) {
            navToggle.addEventListener('click', function() {
                overlay.classList.toggle('active');
            });

            overlay.addEventListener('click', function() {
                overlay.classList.remove('active');
                mainNav.classList.remove('active');
            });
        }
    }

    // Dropdown functionality
    let dropdowns = document.querySelectorAll('.dropdown, .nested-dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseover', function() {
            let content = this.querySelector('.dropdown-content, .nested-content');
            if (content) content.classList.add('active');
        });

        dropdown.addEventListener('mouseout', function() {
            let content = this.querySelector('.dropdown-content, .nested-content');
            if (content) content.classList.remove('active');
        });
    });

    // Scroll event for topbar
    window.onscroll = function() {
        const topbar = document.querySelector('.topbar');
        if (window.scrollY > 50) {
            topbar.classList.add('scrolled');
        } else {
            topbar.classList.remove('scrolled');
        }
    };

    // Loading external HTML components
    $("#header").load("partials/header.html");
    $("#footer").load("partials/footer.html");
});
