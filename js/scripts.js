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
        setTimeout(bindDropdownEvents, 50);  // slight delay to ensure all elements are accessible
    });
    
    $("#footer").load("partials/footer.html");
});



function bindDropdownEvents() {
    console.log('bindDropdownEvents is called');

    if (!document.querySelector('.topbar')) {
        console.log('Topbar is not loaded yet');
        return;
    }

    const mainDropdown = document.querySelector('.dropdown');
    const nestedDropdowns = document.querySelectorAll('.nested-dropdown');
    const overlay = document.querySelector('.overlay');

    if (!mainDropdown || !overlay) {
        console.error('Required elements not found.');
        return;
    }

    mainDropdown.addEventListener('mouseenter', function() {
        this.querySelectorAll('.nested-content').forEach(nestedContent => {
            nestedContent.classList.add('active');
        });
        overlay.style.display = 'block';
    });

    mainDropdown.addEventListener('mouseleave', function() {
        this.querySelectorAll('.nested-content').forEach(nestedContent => {
            nestedContent.classList.remove('active');
        });
        overlay.style.display = 'none';
    });

    nestedDropdowns.forEach((nestedDropdown) => {
        nestedDropdown.addEventListener('mouseenter', function() {
            mainDropdown.querySelectorAll('.nested-content').forEach(nestedContent => {
                nestedContent.classList.remove('active');
            });
            this.querySelector('.nested-content').classList.add('active');
        });
    });
}
