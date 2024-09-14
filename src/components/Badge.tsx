import React from 'react';
import { twJoin } from 'tailwind-merge';

export type SaleBadgeProps = {
  type: 'new' | 'discount';
  text: string; // Text to display in the badge
};

const Badge: React.FC<SaleBadgeProps> = ({ type = 'new', text }) => {
  const badgeClasses = {
    new: 'bg-light-green text-white',
    discount: 'bg-light-red text-white',
  };

  return (
    <div
      className={twJoin(
        badgeClasses[type],
        'flex size-12 items-center justify-center rounded-full',
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
