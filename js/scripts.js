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

});  // <--- 중괄호와 괄호를 추가하여 이벤트 리스너를 닫습니다.

// You can continue with other scripts if any
