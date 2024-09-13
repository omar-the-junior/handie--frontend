import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  onRate?: (rating: number) => void; // Callback for when rating is updated
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
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

  const fullStars = hoverRating ?? currentRating; // Number of full stars
  const emptyStars = maxStars - fullStars; // Remaining empty stars

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Icon
            key={`full-${index}`}
            icon="fluent:star-48-filled"
            style={{
              color: 'gold',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          />
        ))}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <Icon
            key={`empty-${index}`}
            icon="fluent:star-48-filled"
            style={{
              color: 'gray',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
            }}
            onMouseEnter={() => handleMouseEnter(fullStars + index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(fullStars + index)}
          />
        ))}
    </div>
  );
};

export default StarRating;
