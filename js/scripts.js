document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    let navToggle = document.getElementById('nav-toggle');
    let mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
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
    $("#header").load("partials/header.html", function() {
        bindDropdownEvents();
    });
    $("#footer").load("partials/footer.html");
});

function bindDropdownEvents() {
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    const nestedDropdowns = document.querySelectorAll('.nested-dropdown');
    const overlay = document.querySelector('.overlay');  // overlay outside the function

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-content').classList.add('active');
            overlay.style.display = 'block';  // overlay display 변경 추가
        });

        dropdown.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-content').classList.remove('active');
            overlay.style.display = 'none';  // overlay display 변경 추가
        });
    });

    nestedDropdowns.forEach((nestedDropdown) => {
        nestedDropdown.addEventListener('mouseover', function() {
            this.querySelector('.nested-content').classList.add('active');
        });

        nestedDropdown.addEventListener('mouseout', function() {
            this.querySelector('.nested-content').classList.remove('active');
        });
    });
}
