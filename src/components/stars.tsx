import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  starSize?: string;
  onRate?: (rating: number) => void;
  isStatic?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  starSize = '25px',
  onRate,
  isStatic = false,
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState<number>(rating);

  const handleMouseEnter = (index: number) => {
    if (!isStatic) {
      setHoverRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!isStatic) {
      setHoverRating(null);
    }
  };

  const handleClick = (index: number) => {
    if (!isStatic) {
      const newRating = index + 1;
      setCurrentRating(newRating);
      if (onRate) onRate(newRating);
    }
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
            className="cursor-pointer text-orange"
            onMouseEnter={() => handleMouseEnter(fullStars + index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(fullStars + index)}
          />
        ))}
    </div>
  );
};

export default StarRating;