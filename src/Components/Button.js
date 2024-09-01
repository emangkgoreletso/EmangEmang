import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-pink-200
        text-black
        rounded-full
        px-4
        py-2
        font-semibold
        transition-colors
        duration-300
        hover:bg-black
        hover:text-pink-200
        focus:outline-none
      "
    >
      {label}
    </button>
  );
};

export default Button;
