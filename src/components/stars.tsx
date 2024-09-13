import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  starSize?: string;
  onRate?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  starSize = '50px',
  onRate,
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState<number>(rating);

  const handleMouseEnter = (index: number) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const handleClick = (index: number) => {
    const newRating = index + 1;
    setCurrentRating(newRating);
    if (onRate) onRate(newRating);
  };

  const fullStars = hoverRating ?? currentRating; 
  const emptyStars = maxStars - fullStars;

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Icon
            key={`full-${index}`}
            icon="fluent:star-48-filled"
            width={starSize}
            height={starSize}
            className="cursor-pointer text-[#FFCB45]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          />
        ))}

      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <Icon
            key={`empty-${index}`}
            icon="fluent:star-48-filled"
            width={starSize}
            height={starSize}
            className="cursor-pointer text-[#F2F2F2]"
            onMouseEnter={() => handleMouseEnter(fullStars + index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(fullStars + index)}
          />
        ))}
    </div>
  );
};

export default StarRating;
