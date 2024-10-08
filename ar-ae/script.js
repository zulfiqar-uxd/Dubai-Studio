// Add a scroll event listener to change the header background on scroll
window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Handle Language Dropdown
const languageBtn = document.getElementById('language-btn');
const languageDropdown = document.getElementById('language-dropdown');
let selectedLanguage = 'EN'; // Default selected language

// Toggle dropdown visibility
languageBtn.addEventListener('click', () => {
    languageDropdown.classList.toggle('show');
});

// Handle language selection
languageDropdown.addEventListener('click', (event) => {
    if (event.target.matches('.dropdown-item')) {
        selectedLanguage = event.target.getAttribute('data-lang');
        languageBtn.textContent = selectedLanguage;

        // Remove "active" class from all items
        document.querySelectorAll('.dropdown-item').forEach(item => item.classList.remove('active'));

        // Add "active" class to the selected item
        event.target.classList.add('active');

        // Close the dropdown after selection
        languageDropdown.classList.remove('show');
    }
});

// Close the dropdown when clicking outside
document.addEventListener('click', (event) => {
    // If the click is outside the dropdown and button, close the dropdown
    if (!languageDropdown.contains(event.target) && !languageBtn.contains(event.target)) {
        languageDropdown.classList.remove('show');
    }
});

// Get the offcanvas element
var offcanvasMenu = document.getElementById('offcanvasMenu');

// Listen for the offcanvas show event
offcanvasMenu.addEventListener('show.bs.offcanvas', function () {
    // Remove the padding-right style that Bootstrap applies
    document.body.style.paddingRight = '0';
});

// Optional: Listen for hide event to ensure no padding is added back
offcanvasMenu.addEventListener('hide.bs.offcanvas', function () {
    // Ensure the padding stays reset when the offcanvas is closed
    document.body.style.paddingRight = '';
});



document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#services-slider', {
        type: 'loop',
        perPage: 4, 
        pagination: false,
        arrows: false,
        breakpoints: {
            1024: {
                perPage: 2,
                paddingRight: '5rem',
            },
            768: {
                perPage: 1,
                padding: '2rem',
            },
        },
        autoplay   : false,
        interval   : 3000,
    } ).mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#catalogue-slider', {
        type: 'loop',
        perPage: 4, 
        gap: '20px',
        pagination: false,
        arrows: false,
        autoWidth: true,
        breakpoints: {
            1024: {
                perPage: 2,
                paddingRight: '5rem',
            },
            768: {
                perPage: 1,
                padding: '2rem',
            },
        },
        autoplay   : true,
        interval   : 3000,
    } ).mount();
});


document.addEventListener('DOMContentLoaded', function () {
    new Splide('#partners-slider', {
        type: 'loop',
        drag   : 'free',
        focus  : 'center',
        gap: '20px',
        perPage: 4,
        pagination: false,
        arrows: false,
        autoWidth: true,
        breakpoints: {
            1024: {
                perPage: 2,
                paddingRight: '5rem',
            },
            768: {
                perPage: 1,
            },
        },
        autoScroll: {
          speed: 1,
        },
    }).mount(window.splide.Extensions);
});
