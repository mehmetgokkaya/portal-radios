export default function () {
    const toggleOffcanvas = document.querySelectorAll('.toggle-offcanvas');

    if (toggleOffcanvas.length >= 1) {
        toggleOffcanvas.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const menuOffcanvas = document.querySelector('.menu-offcanvas');
                const closeOffcanvas = document.querySelector('.close-menu-offcanvas');

                menuOffcanvas.classList.toggle('show');
                closeOffcanvas.classList.toggle('show');
            }, false);
        })
    }
}