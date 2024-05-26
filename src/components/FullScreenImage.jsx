import React, { useState, useEffect } from 'react';
import firstImg from '../assets/first.png';

function FullScreenImage() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 1000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    useEffect(() => {
        if (!visible) {
            const container = document.getElementById('cont');
            if (container) {
                container.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
                container.style.transform = 'translateY(-100%)';
                container.style.opacity = '0';
            }
            
        }
    }, [visible]);

    return (
        <div id='cont' className="fixed  inset-0 flex items-center justify-center z-50">
            {/* Background overlay with reduced opacity */}
            {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
            {/* Image container */}
            <div className="absolute ">
                <img
                    id="fullscreen-image"
                    src={firstImg}
                    alt="Full Screen"
                    className="w-[100vw] h-[100vh] object-fill"
                />
            </div>
        </div>
    );
}

export default FullScreenImage;
