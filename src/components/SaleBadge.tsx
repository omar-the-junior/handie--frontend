import React from 'react';

interface SaleBadgeProps {
  type: 'new' | 'both';
  discount?: number; // Optional discount percentage for "best" type
}

const SaleBadge: React.FC<SaleBadgeProps> = ({ type, discount = 50 }) => {
  return (
    <div
      className="absolute right-2 top-2 flex flex-col items-center justify-center gap-2 text-center text-xs text-white"
      style={{ flexShrink: 0 }}
    >
      {type === 'new' && (
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#2EC1AC]">
          <span>new</span>
        </div>
      )}
      {type === 'both' && (
        <div className="flex items-center justify-center gap-2">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#2EC1AC]">
            <span>new</span>
          </div>
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red-500">
            <span>{discount}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaleBadge;
