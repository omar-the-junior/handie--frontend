import React from 'react';
import { Icon } from '@iconify/react';

type StarRatingProps = {
  rating: number; // Starting rating should be an integer
  maxStars?: number;
  starSize?: string;
};

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  starSize = '25px',
}) => {
  const fullStars = (rating); 
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
            className="text-[#FFCB45]" // Full star color
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
            className="text-[#B0B0B0]" // Empty star color
          />
        ))}
    </div>
  );
};

export default StarRating;
