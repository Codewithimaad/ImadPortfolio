// Smooth scroll utility with better browser compatibility
export const smoothScrollTo = (elementId, options = {}) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const {
        behavior = 'smooth',
        block = 'start',
        inline = 'nearest',
        offset = 0
    } = options;

    // Get the element's position
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    // Use native smooth scroll if supported
    if ('scrollBehavior' in document.documentElement.style) {
        element.scrollIntoView({
            behavior,
            block,
            inline
        });
    } else {
        // Fallback for older browsers
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// Enhanced smooth scroll with easing
export const smoothScrollToWithEasing = (elementId, duration = 1000) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100; // 100px offset for navbar
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function (easeInOutCubic)
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
};
