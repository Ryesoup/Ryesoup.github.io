$(document).ready(function() {
    $("#header").load("/partials/header.html");
    $("#footer").load("/partials/footer.html");
});

function openNav() {
    $(".sidebar").css("width", "250px");
    $(".container").css("margin-left", "250px");
}

function closeNav() {
    $(".sidebar").css("width", "0");
    $(".container").css("margin-left", "0");
}
