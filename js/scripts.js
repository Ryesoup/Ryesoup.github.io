// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    let navToggle = document.getElementById('nav-toggle');
    let mainNav = document.getElementById('main-nav');

    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Overlay for mobile menu
    let overlay = document.querySelector('.overlay');

    navToggle.addEventListener('click', function() {
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        overlay.classList.remove('active');
        mainNav.classList.remove('active');
    });

    // Dropdown functionality
    let dropdownTriggers = document.querySelectorAll('.dropdown > a, .nested-dropdown > a');

    dropdownTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();

            let content = this.nextElementSibling;
            if (content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                document.querySelectorAll('.dropdown-content.active, .nested-content.active').forEach(function(activeContent) {
                    activeContent.classList.remove('active');
                });

                content.classList.add('active');
            }
        });
    });
});

// You can continue with other scripts if any
