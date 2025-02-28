import React from "react";
import { useInView } from "../../hooks/useInView";

export const Button = ({ width = "w-80", content }) => {
  const inView = useInView();

  return (
    <div className={`scroll-animate ${inView ? 'animate-fadeIn' : ''}`}>
      <button
        className={`${width} bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transform transition-all duration-300 hover:scale-105`}
      >
        {content}
      </button>
    </div>
  );
};
