import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { insforge, isBackendConfigured } from '../../lib/insforge';
import { initAnalytics, trackPageView } from '../../lib/analytics';

const PageTracker = () => {
    const location = useLocation();
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initAnalytics();
            initialized.current = true;
        }
    }, []);

    useEffect(() => {
        const track = async () => {
            trackPageView(location.pathname);

            if (!isBackendConfigured) return;
            try {
                await insforge.database.from('page_views').insert([{
                    path: location.pathname,
                    user_agent: navigator.userAgent,
                }]);
            } catch (error) {
                // Ignore errors
            }
        };

        track();
    }, [location]);

    return null;
};

export default PageTracker;
