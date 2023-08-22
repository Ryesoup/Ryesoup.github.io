$(document).ready(function() {
    $("#header").load("/partials/header.html");
    $("#footer").load("/partials/footer.html");
});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
