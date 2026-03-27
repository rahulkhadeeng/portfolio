// Initialize Lucide Icons
lucide.createIcons();

// Setup Live IST Clock
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    if (!clockElement) return;

    const now = new Date();
    const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    // Fallback locally if formatting fails
    try {
        const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
        clockElement.textContent = `${timeString} IST`;
    } catch (e) {
        console.error("Time format error:", e);
    }
}

setInterval(updateClock, 1000);
updateClock();

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
    rootElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

// Initialize Theme
setTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Scroll Reveal Animation (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        } else {
            // Optional: Remove if we want it to animate every time we scroll up/down
            // entry.target.classList.remove('reveal-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-hidden').forEach(element => {
    observer.observe(element);
});

// View More Accordion Logic
document.querySelectorAll('.view-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const details = btn.nextElementSibling;
        const isOpen = details.style.display === 'block';

        details.style.display = isOpen ? 'none' : 'block';
        btn.classList.toggle('open', !isOpen);

        // Update button text while keeping the icon child
        const textNode = Array.from(btn.childNodes).find(n => n.nodeType === 3);
        if (textNode) {
            textNode.nodeValue = isOpen ? 'View More ' : 'View Less ';
        }
    });
});

// Tech Stack reveal toggle
const stackToggle = document.getElementById('stack-toggle');
const fullStackPanel = document.getElementById('full-stack-panel');
const stackPreview = document.querySelector('.stack-preview');

if (stackToggle && fullStackPanel) {
    stackToggle.addEventListener('click', () => {
        const isOpen = stackToggle.classList.toggle('open');

        stackToggle.setAttribute('aria-expanded', String(isOpen));
        stackToggle.textContent = isOpen ? 'Show Less' : 'View Full Stack';
        stackToggle.classList.toggle('open', isOpen);
        fullStackPanel.hidden = false;
        if (stackPreview) {
            stackPreview.classList.toggle('is-hidden', isOpen);
        }

        requestAnimationFrame(() => {
            fullStackPanel.classList.toggle('is-open', isOpen);
        });

        if (!isOpen) {
            const handleTransitionEnd = (event) => {
                if (event.propertyName === 'max-height') {
                    fullStackPanel.hidden = true;
                    fullStackPanel.removeEventListener('transitionend', handleTransitionEnd);
                }
            };

            fullStackPanel.addEventListener('transitionend', handleTransitionEnd);
        }
    });
}

