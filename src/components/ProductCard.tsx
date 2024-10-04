import React, { useState } from 'react';
import Stars from './Stars';
import { Icon } from '@iconify/react';
import Badge from './Badge';
import { twMerge } from 'tailwind-merge';

export type ProductCardProps = {
  productName: string;
  sellerName: string;
  price: number;
  rating: number;
  imageSrc: string;
  isNew?: boolean;
  discount?: number;
  className?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  sellerName,
  price,
  rating,
  imageSrc,
  isNew,
  discount = 50,
  className,
}) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;
  const [hidden, setHidden] = useState(true);

  return (
    <div
      className={twMerge(
        'relative flex flex-col items-start justify-center rounded-md bg-secondary shadow-[0_2px_15px_5px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-secondary',
        className,
      )}
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      <div className="relative">
        <img
          src={imageSrc}
          className="h-auto w-full rounded-t-md object-cover"
          alt="Product"
        />

        <div
          className={`absolute inset-0 z-10 flex items-center justify-center gap-9 rounded-t-md bg-[#3A3A3AB8] transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}
        >
          <Icon
            icon="solar:cart-large-minimalistic-linear"
            className="h-10 w-10 cursor-pointer text-2xl text-primary"
          />
          <Icon
            icon="ri:heart-add-2-line"
            className="h-10 w-10 cursor-pointer text-2xl text-white"
          />
        </div>
        <div className="absolute right-2 top-2 z-0 flex gap-6">
          {isNew && <Badge type="new" text="New" />}
          {discount && <Badge type="discount" text={`%${discount}`} />}
        </div>
      </div>

      <div className="p-4">
        <h5 className="mb-2 text-[24px] font-semibold leading-[28.8px] text-[#3A3A3A]">
          {productName}
        </h5>

        <div className="mb-2 flex items-center">
          <Icon
            icon="solar:user-circle-linear"
            width="28"
            height="28"
            className="text-black mr-2"
          />
          <p className="text-[16px] font-medium leading-[24px] text-[#898989]">
            {sellerName}
          </p>
        </div>

        <div className="mb-4 flex h-[10px] items-start">
          <Stars rating={rating} />
        </div>

        <div className="flex w-full items-center justify-between gap-4 text-[20px] leading-[30px]">
          {discount ? (
            <>
              <span className="text-xl font-semibold text-[#3A3A3A]">
                ${discountedPrice.toFixed(2)}
              </span>
              <span className="text-[#B0B0B0] line-through">
                ${price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[#3A3A3A]">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
