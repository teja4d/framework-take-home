import React, { useState } from 'react';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Button = ({ variant = 'outlined' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const buttonClasses = `inline-flex items-center px-4 py-1.5 border border-black text-sm leading-5 font-medium rounded-full focus:outline-none transition duration-150 ease-in-out 
    ${variant === 'filled' ? 'bg-black-600 text-white border-transparent' : 'bg-white text-gray-900 border border-gray-900'} 
    ${isHovered && variant === 'filled' ? 'hover:bg-gray-500' : ''} 
    ${isClicked && variant === 'filled' ? 'active:bg-gray-800' : ''}
    ${isHovered && variant === 'outlined' ? 'hover:bg-gray-200 border-gray-700' : ''}
    ${isClicked && variant === 'outlined' ? 'active:bg-gray-200' : ''}`;

  return (
    <button
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onBlur={() => setIsClicked(false)}
    >
      <span>{variant === 'filled' ? 'Click Me' : 'CTA Button'}</span>
      <span className={`ml-2 ${variant === 'filled' ? 'text-white-100' : 'text-black-600'}`}>
        <LiaLongArrowAltRightSolid className='text-2xl'/>
      </span>
    </button>
  );
};

export default Button;
