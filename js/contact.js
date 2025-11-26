document.addEventListener('DOMContentLoaded', () => {
    const sendMessageBtn = document.getElementById('send-message-btn');

    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', () => {
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            if (name && email && message) {
                const mailtoLink = `mailto:reddough19@gmail.com?subject=Message from ${name}&body=${message}`;
                window.location.href = mailtoLink;
            } else {
                alert('Please fill out all fields before sending a message.');
            }
        });
    }
});
