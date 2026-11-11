// Smooth-scrolls to a section and briefly highlights it with its glow effect
export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth' });

    element.classList.remove('active-section');
    void element.offsetWidth; // Force reflow so the effect restarts
    element.classList.add('active-section');

    setTimeout(() => {
        element.classList.remove('active-section');
    }, 2000);
};
