// function bindDropdownEvents() {
//     const mainDropdown = document.querySelector('.dropdown');
//     const nestedDropdowns = document.querySelectorAll('.nested-dropdown');
//     const overlay = document.querySelector('.overlay');  

//     if (!mainDropdown || !overlay) return;

//     mainDropdown.addEventListener('mouseenter', function() {
//         overlay.style.display = 'block';
//     });

//     mainDropdown.addEventListener('mouseleave', function() {
//         this.querySelectorAll('.nested-content').forEach(nestedContent => {
//             nestedContent.classList.remove('active');
//         });
//         overlay.style.display = 'none';
//     });

//     nestedDropdowns.forEach((nestedDropdown) => {
//         nestedDropdown.addEventListener('mouseenter', function() {
//             this.querySelector('.nested-content').classList.add('active');
//         });

//         nestedDropdown.addEventListener('mouseleave', function() {
//             this.querySelector('.nested-content').classList.remove('active');
//         });
//     });
// }
