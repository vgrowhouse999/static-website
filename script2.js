document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic greeting message
    const greeting = document.querySelector('#home p');
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.innerText = 'Good morning! Welcome to the home section.';
    } else if (hours < 18) {
        greeting.innerText = 'Good afternoon! Welcome to the home section.';
    } else {
        greeting.innerText = 'Good evening! Welcome to the home section.';
    }
});
