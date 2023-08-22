$(document).ready(function() {
    $("#header").load("/partials/header.html");
    $("#footer").load("/partials/footer.html");
});

window.onscroll = function() {
    const topbar = document.querySelector('.topbar');
    if (window.scrollY > 50) {
        topbar.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
    }
};
