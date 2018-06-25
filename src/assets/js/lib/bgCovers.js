export default function () {
    let data = document.querySelectorAll('[data-bgcover]');

    if (data) {
        data.forEach(element => {
            const bg = element.getAttribute('data-bgcover');
            element.classList.add('bg-cover');
            element.style.backgroundImage = `url(${bg})`;
        });
    }
}