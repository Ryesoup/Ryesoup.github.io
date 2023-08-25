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
