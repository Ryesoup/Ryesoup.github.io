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
document.addEventListener('DOMContentLoaded', function() {
    // 모든 드롭다운 트리거(클릭할 요소)를 선택합니다.
    let dropdownTriggers = document.querySelectorAll('.dropdown > a, .nested-dropdown > a');

    dropdownTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 이벤트를 중단합니다.

            let content = this.nextElementSibling; // dropdown-content 또는 nested-content
            if (content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                // 기타 모든 드롭다운 컨텐츠를 숨깁니다.
                document.querySelectorAll('.dropdown-content.active, .nested-content.active').forEach(function(activeContent) {
                    activeContent.classList.remove('active');
                });
                
                content.classList.add('active'); // 현재 드롭다운 컨텐츠를 표시합니다.
            }
        });
    });
});
