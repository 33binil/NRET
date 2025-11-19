import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

const Contact = () => {
    const animationContainer = useRef(null);

    useEffect(() => {
        if (animationContainer.current) {
            fetch('/ComingSoon.json')
                .then(response => response.json())
                .then(data => {
                    Lottie.loadAnimation({
                        container: animationContainer.current,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        animationData: data
                    });
                })
                .catch(error => console.error('Error loading animation:', error));
        }

        return () => {
            if (animationContainer.current) {
                Lottie.destroy();
            }
        };
    }, []);

    return (
        <div className="relative bg-black min-h-screen flex items-center justify-center">
            <div ref={animationContainer} className="w-full h-full max-w-2xl max-h-2xl"></div>
        </div>
    );
}
export default Contact
