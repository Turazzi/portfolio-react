import React, { useEffect, useRef } from "react"; 
import './styles/StarField.css';

export default function StarField() {
    const starContainerRef = useRef(null); 

     useEffect(() => {
        const starContainer = starContainerRef.current;
        const numberOfStars = 150;

        if (!starContainer) return;

        starContainer.innerHTML = ''; 
        for(let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            const twinkleDuration = Math.random() * 3 + 2; 
            const flyDuration = Math.random() * 15 + 10;
            const animationDelay = Math.random() * 10;
            star.style.animation = `
                twinkle ${twinkleDuration}s linear infinite, 
                fly ${flyDuration}s linear infinite
            `;
            star.style.animationDelay = `${animationDelay}s`;
            starContainer.appendChild(star);
        }

        const createShootingStar = () => {
            const shootingStar = document.createElement('div');
            shootingStar.classList.add('shooting-star');
            
            shootingStar.style.top = `${Math.random() * 100}%`;
            shootingStar.style.animationDuration = `${Math.random() * 2 + 1}s`;
            shootingStar.style.width = `${Math.random() * 150 + 50}px`;

            starContainer.appendChild(shootingStar);

            setTimeout(() => {
                shootingStar.remove();
            }, 3000);
        };

        const shootingStarInterval = setInterval(createShootingStar, 4000);

        return () => clearInterval(shootingStarInterval);

    }, []);

    return (
        <div ref={starContainerRef} className="starfield"></div>
    );
}