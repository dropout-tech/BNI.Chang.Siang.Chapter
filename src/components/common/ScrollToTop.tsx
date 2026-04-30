import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            window.setTimeout(() => {
                document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            return;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname, hash]);

    return null;
}
