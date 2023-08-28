function bindDropdownEvents() {
    const nestedDropdowns = document.querySelectorAll('.nested-dropdown');
    const overlay = document.querySelector('.overlay');  

    nestedDropdowns.forEach((nestedDropdown) => {
        nestedDropdown.addEventListener('mouseenter', function() {
            // 모든 .nested-content를 비활성화합니다.
            nestedDropdowns.forEach((dropdown) => {
                const nestedContent = dropdown.querySelector('.nested-content');
                if (nestedContent) {
                    nestedContent.classList.remove('active');
                }
            });

            // 현재 .nested-content만 활성화합니다.
            const currentNestedContent = this.querySelector('.nested-content');
            if (currentNestedContent) {
                currentNestedContent.classList.add('active');
            }

            // 오버레이를 활성화합니다.
            if (overlay) {
                overlay.style.display = 'block';
            }
        });

        nestedDropdown.addEventListener('mouseleave', function() {
            // 현재 .nested-content를 비활성화합니다.
            const currentNestedContent = this.querySelector('.nested-content');
            if (currentNestedContent) {
                currentNestedContent.classList.remove('active');
            }

            // 오버레이를 비활성화합니다.
            if (overlay) {
                overlay.style.display = 'none';
            }
        });
    });
}
