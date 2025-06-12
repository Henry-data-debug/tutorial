/* filepath: c:\Users\user\Downloads\tutorial\script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Gallery Logic
    const serviceLinks = document.querySelectorAll('.service-link');
    const serviceGalleries = document.querySelectorAll('.service-gallery');

    serviceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetGallery = document.getElementById(targetId);
            serviceLinks.forEach(l => l.classList.remove('active'));
            serviceGalleries.forEach(g => g.classList.remove('active'));
            this.classList.add('active');
            if (targetGallery) {
                targetGallery.classList.add('active');
            }
        });
    });

    // Dropdown Menu Logic
    const dropdowns = document.querySelectorAll('.has-dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const menu = this.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseleave', function() {
            const menu = this.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.display = 'none';
            }
        });
    });
});