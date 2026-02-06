import { useEffect, useState } from "react";

export const useHeroVisibility = (sectionId: string) => {
    const [isHeroVisible, setIsHeroVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById(sectionId);
            if (heroSection) {
                const rect = heroSection.getBoundingClientRect();
                setIsHeroVisible(rect.top >= 0 && rect.bottom > window.innerHeight / 2);
            }
        };

        handleScroll(); // estado inicial

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionId]);

    return { isHeroVisible };
};