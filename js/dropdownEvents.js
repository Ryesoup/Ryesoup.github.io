document.addEventListener('DOMContentLoaded', (event) => {
    const nestedContents = document.querySelectorAll('.nested-content');
    nestedContents.forEach((nestedContent) => {
        nestedContent.classList.remove('active');
    });
});

function bindDropdownEvents() {
    const mainDropdown = document.querySelector('.dropdown');
    const overlay = document.querySelector('.overlay');  

    if (!mainDropdown || !overlay) return;

    mainDropdown.addEventListener('mouseenter', function() {
        overlay.style.display = 'block';
    });

    mainDropdown.addEventListener('mouseleave', function() {
        overlay.style.display = 'none';
    });
}
