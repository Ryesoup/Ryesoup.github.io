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

    dropdowns[0].addEventListener('mouseover', function() {
        // Blog를 hover할 때 모든 nested-dropdowns를 표시
        this.querySelectorAll('.nested-content').forEach(nestedContent => {
            nestedContent.classList.add('active');
        });
        overlay.style.display = 'block';
    });

    dropdowns[0].addEventListener('mouseout', function() {
        this.querySelectorAll('.nested-content').forEach(nestedContent => {
            nestedContent.classList.remove('active');
        });
        overlay.style.display = 'none';
    });

    nestedDropdowns.forEach((nestedDropdown) => {
        nestedDropdown.addEventListener('mouseover', function() {
            // 모든 nested-dropdowns 항목들을 비활성화
            dropdowns[0].querySelectorAll('.nested-content').forEach(nestedContent => {
                nestedContent.classList.remove('active');
            });
            // 현재 nested-dropdown 항목만 활성화
            this.querySelector('.nested-content').classList.add('active');
        });

        nestedDropdown.addEventListener('mouseout', function() {
            // 선택하지 않아도 되므로 이 부분은 그대로 둡니다.
            this.querySelector('.nested-content').classList.remove('active');
        });
    });
}
