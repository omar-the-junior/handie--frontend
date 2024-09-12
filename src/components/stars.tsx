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

  const fullStars = Math.floor(hoverRating ?? currentRating); // Number of full stars
  const hasHalfStar = (hoverRating ?? currentRating) % 1 >= 0.5; // Check if there's a half star
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Render full stars */}
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

      {/* Render half star, if applicable */}
      {hasHalfStar && (
        <Icon
          icon="fluent:star-48-filled"
          style={{
            color: 'gold',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            clipPath: 'inset(0 50% 0 0)',
          }}
          onMouseEnter={() => handleMouseEnter(fullStars)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(fullStars)}
        />
      )}

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
            onMouseEnter={() =>
              handleMouseEnter(fullStars + (hasHalfStar ? 1 : 0) + index)
            }
            onMouseLeave={handleMouseLeave}
            onClick={() =>
              handleClick(fullStars + (hasHalfStar ? 1 : 0) + index)
            }
          />
        ))}
    </div>
  );
};

export default StarRating;
