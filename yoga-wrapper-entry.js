// Entry point for building yoga with wrapper included
import * as yoga from 'yoga-layout';

// Wrap the yoga loading in an async function to handle the top-level await
(async function() {
    try {
        console.log('Starting yoga load...');
        console.log('Yoga imported:', !!yoga, !!yoga.default);
        
        // Expose yoga globally
        window.yogaLayout = yoga.default;
        
        // Signal that yoga is ready
        window.yogaLayoutReady = true;
        window.dispatchEvent(new Event('yogaLayoutReady'));
        
        console.log('yoga-layout loaded and ready');
        
        return yoga.default;
    } catch (error) {
        console.error('Failed to load yoga-layout:', error);
        // Don't rethrow - let it fail gracefully
        return null;
    }
})().catch(err => {
    console.warn('Yoga loading promise rejected:', err);
});

// Expose a function for scripts that want to wait
window.loadYogaLayout = function() {
    return new Promise((resolve) => {
        if (window.yogaLayoutReady) {
            resolve(window.yogaLayout);
        } else {
            window.addEventListener('yogaLayoutReady', () => {
                resolve(window.yogaLayout);
            });
        }
    });
};

// Also expose a simple check function
window.isYogaReady = function() {
    return window.yogaLayoutReady === true;
};