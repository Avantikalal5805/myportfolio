// JavaScript for Avantika Lal's Portfolio

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Highlight Active Section in Navbar on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Toggle Dark Mode
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 15px';
toggleButton.style.backgroundColor = '#0288d1';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        toggleButton.style.backgroundColor = '#ffcc80';
        toggleButton.style.color = '#333';
    } else {
        document.body.style.backgroundColor = '#fdfdfd';
        document.body.style.color = '#333';
        toggleButton.style.backgroundColor = '#0288d1';
        toggleButton.style.color = '#fff';
    }
});

document.body.appendChild(toggleButton);
