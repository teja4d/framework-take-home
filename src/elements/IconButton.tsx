import React, { FC, ReactNode, MouseEvent } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

interface IconButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  icon: ReactNode;
}

const IconButton: FC<IconButtonProps> = ({ onClick,bgColor="", textColor="white", fontSize, icon }) => {
  
  const buttonStyles = `bg-${bgColor} text-${fontSize} text-${textColor} font-bold py-2 px-4 rounded-full`;
  const iconStyles = `text-${fontSize}`;

const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.vibrate(100);
    onClick(e);
}

  return (
    <button className={buttonStyles} onClick={handleIconClick}>
      <p className={iconStyles}>{icon}</p>
    </button>
  );
};

export default IconButton;