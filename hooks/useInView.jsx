import React, { useEffect, useState } from 'react';


export const useInView = (threshold = 0.5) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    const element = document.querySelector('.scroll-animate');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return isInView;
};
