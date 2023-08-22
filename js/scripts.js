$(document).ready(function() {
    $("#header").load("/partials/header.html");
    $("#footer").load("/partials/footer.html");
});

function openNav() {
    document.querySelector(".sidebar").style.width = "250px";
}

function closeNav() {
    document.querySelector(".sidebar").style.width = "0";
}
