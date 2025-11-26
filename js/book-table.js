document.addEventListener('DOMContentLoaded', () => {
    const bookTableForm = document.querySelector('.book-table-form');

    if (bookTableForm) {
        bookTableForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Simulate form submission (e.g., sending data to a server)
            // In a real application, you would send an AJAX request here.

            // Display success message
            alert('Thanks! Your submitted was successfully.');

            // Optionally, clear the form fields
            bookTableForm.reset();
        });
    }
});