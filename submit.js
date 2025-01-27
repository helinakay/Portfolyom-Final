document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display the thank-you message
    const thankYouDiv = document.getElementById('thankYouMessage');
    thankYouDiv.innerHTML = `
            <h2>İletişime Geçtiğin İçin Teşekkürler, ${name.toUpperCase()}!</h2>`;
    thankYouDiv.style.display = 'block';

    // Optionally, reset the form
    document.getElementById('contactForm').reset();
});