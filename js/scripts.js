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
    const dropdowns = document.querySelectorAll('.dropdown');
    const nestedDropdowns = document.querySelectorAll('.nested-dropdown');
    const overlay = document.querySelector('.overlay');  

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseover', function() {
            // Blog를 hover할 때 모든 nested-dropdowns를 표시
            this.querySelectorAll('.nested-content').forEach(nestedContent => {
                nestedContent.classList.add('active');
            });
            overlay.style.display = 'block';
        });

        dropdown.addEventListener('mouseout', function() {
            this.querySelectorAll('.nested-content').forEach(nestedContent => {
                nestedContent.classList.remove('active');
            });
            overlay.style.display = 'none';
        });
    });

    nestedDropdowns.forEach((nestedDropdown) => {
        nestedDropdown.addEventListener('mouseover', function() {
            // 특정 nested-dropdown을 hover할 때 다른 nested-dropdowns를 숨김
            dropdowns[0].querySelectorAll('.nested-content').forEach(nestedContent => {
                nestedContent.classList.remove('active');
            });
            this.querySelector('.nested-content').classList.add('active');
        });

        nestedDropdown.addEventListener('mouseout', function() {
            this.querySelector('.nested-content').classList.remove('active');
        });
    });
}
