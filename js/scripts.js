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
    const topbar = document.querySelector('.topbar');
    topbar.addEventListener('mouseover', function() {
        let dropdownContents = topbar.querySelectorAll('.dropdown-content, .nested-content');
        dropdownContents.forEach(content => content.classList.add('active'));
    });

    document.addEventListener('click', function(event) {
        if (!topbar.contains(event.target)) {
            let dropdownContents = topbar.querySelectorAll('.dropdown-content, .nested-content');
            dropdownContents.forEach(content => content.classList.remove('active'));
        }
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
