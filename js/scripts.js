$(document).ready(function() {
    $("#header").load("/partials/header.html");
    $("#footer").load("/partials/footer.html");
});

function openNav() {
    document.getElementById("menuContent").style.display = "block";
}

function closeNav() {
    document.getElementById("menuContent").style.display = "none";
}
