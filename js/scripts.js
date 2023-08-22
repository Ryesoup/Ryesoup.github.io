$(document).ready(function() {
    $("#header").load("partials/header.html", function() {
        window.onscroll = function() {
            const topbar = document.querySelector('.topbar');
            if (window.scrollY > 50) {
                topbar.classList.add('scrolled');
            } else {
                topbar.classList.remove('scrolled');
            }
        };
    });

    $("#footer").load("partials/footer.html");
});
