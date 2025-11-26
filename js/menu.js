document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.btn-buy');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.open('https://www.facebook.com/RedDough1', '_blank');
        });
    });
});
