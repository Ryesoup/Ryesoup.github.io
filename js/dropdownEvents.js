function bindDropdownEvents() {
    const mainDropdown = document.querySelector('.dropdown');
    const nestedDropdowns = document.querySelectorAll('.nested-dropdown');
    const overlay = document.querySelector('.overlay');  

    if (!mainDropdown || !overlay) return;

    mainDropdown.addEventListener('mouseenter', function() {
        this.querySelectorAll('.nested-content').forEach(nestedContent => {
            nestedContent.classList.remove('active');  // 모든 중첩된 nested-content를 비활성화
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
