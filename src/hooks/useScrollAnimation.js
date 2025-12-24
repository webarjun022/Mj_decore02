import { useEffect } from 'react';

const useScrollAnimation = (enabled = true, dependency = null) => {
    useEffect(() => {
        if (!enabled) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Trigger once
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully in view
            }
        );

        // Small delay to ensure DOM is ready on route change
        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll('.fade-up');
            elements.forEach((el) => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            const elements = document.querySelectorAll('.fade-up');
            elements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, [enabled, dependency]); // Re-run when enable status or dependency changes
};

export default useScrollAnimation;
